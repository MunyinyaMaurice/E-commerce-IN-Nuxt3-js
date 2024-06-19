
import type { UseFetchOptions } from '#app';
import { defu } from 'defu';
import { useCookie, useFetch } from '#app';
import { useRouter } from "vue-router";

// async function refreshToken() {
//   const refreshToken = useCookie('refreshToken');

//   const { data, error } = await useFetch<{ accessToken: string }>(
//     'http://localhost:23999/api/auth/refresh',
//     {
//       method: 'POST',
//       body: { refreshToken: refreshToken.value },
//       headers: { 'Content-Type': 'application/json' },
//     }
//   );

//   if (error.value) {
//     throw new Error('Token refresh failed');
//   }

//   const newAccessToken = data.value?.accessToken;
//   if (newAccessToken) {
//     useCookie('accessToken').value = newAccessToken;
//     return newAccessToken;
//   } else {
//     throw new Error('Failed to retrieve new access token');
//   }
// }
export async function useIFetch<T>(
        url: string,
        options: UseFetchOptions<T> = {}
      ) {
  const accessToken = useCookie('accessToken');
  const router = useRouter();
  const config = useRuntimeConfig();
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,
    headers: accessToken.value
      ? { Authorization: `Bearer ${accessToken.value}` }
      : {},
    onResponse: async ({ response, options }) => {
      if (response.status === 401) {
        // try {
        //   const newToken = await refreshToken();
        //   options.headers = { Authorization: `Bearer ${newToken}` };
        //   return useFetch(url, options as UseFetchOptions<T>);
        // } catch (error) {
        //   console.error('Token refresh failed:', error);
        // }
        router.push("/login");
      }
    },
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}