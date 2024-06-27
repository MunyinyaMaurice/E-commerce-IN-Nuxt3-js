// import type { UseFetchOptions } from '#app';
// import { defu } from 'defu';
// import { useCookie, useFetch } from '#app';
// import { useRouter } from "vue-router";

// export async function useIFetch<T>(
//   url: string,
//   options: UseFetchOptions<T> = {}
// ) {
//   const accessToken = useCookie('accessToken');
//   const router = useRouter();
//   const config = useRuntimeConfig();
//   const defaults: UseFetchOptions<T> = {
//     baseURL: config.public.apiBase,
//     key: url,
//     headers: accessToken.value
//       ? { Authorization: `Bearer ${accessToken.value}` }
//       : {},
//     onResponse: async ({ response, options }) => {
//       if (response.status === 401) {
//         router.push("/login");
//       }
//     },
//   };

//   const params = defu(options, defaults);

//   return useFetch(url, params);
// }

/**
 * WORKING WELL
 * Store token in cookies
 */

// import type { UseFetchOptions } from "#app";
// import { defu } from "defu";
// import { useCookie, useFetch } from "#app";
// import { useRouter } from "vue-router";
// export async function useIFetch<T>(
//   url: string,
//   options: UseFetchOptions<T> = {}
// ) {
//   const accessToken = useCookie("accessToken");
//   const router = useRouter();
//   const config = useRuntimeConfig();
//   const defaults: UseFetchOptions<T> = {
//     baseURL: config.public.apiBase,
//     key: url,
//     headers: accessToken.value
//       ? { Authorization: `Bearer ${accessToken.value}` }
//       : {},
//     onResponse: async ({ response, options }) => {
//       if (response.status === 401) {
//         router.push({ path: "/login" });
//       }
//     },
//   };

//   const params = defu(options, defaults);

//   return useFetch(url, params);
// }

/**
 * WORKING WELL
 * Store token in LOCALSTORAGE
 */

// import type { UseFetchOptions } from "#app";
// import { defu } from "defu";
// import { useFetch } from "#app";
// import { useRouter } from "vue-router";

// export async function useIFetch<T>(
//   url: string,
//   options: UseFetchOptions<T> = {}
// ) {
//   const router = useRouter();
//   const config = useRuntimeConfig();

//   // Ensure localStorage is available and fetch the accessToken
//   let accessToken = null;
//   if (typeof localStorage !== "undefined") {
//     accessToken = localStorage.getItem("accessToken");
//   }

//   const defaults: UseFetchOptions<T> = {
//     baseURL: config.public.apiBase,
//     key: url,
//     headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
//     onResponse: async ({ response, options }) => {
//       if (response.status === 401) {
//         router.push({ path: "/login" });
//       }
//     },
//   };

//   const params = defu(options, defaults);

//   try {
//     const result = await useFetch(url, params);
//     console.log("Fetch result:", result);
//     return result;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     throw error;
//   }
// }

/**
 * WORKING WELL
 * Store token in LOCALSTORAGE and use statemanagemnt
 */

import type { UseFetchOptions } from "#app";
import { defu } from "defu";
import { useFetch } from "#app";
import { useRouter } from "vue-router";
import { getToken } from "~/composables/authService";

export async function useIFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const router = useRouter();
  const config = useRuntimeConfig();
  const accessToken = getToken();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    onResponse: async ({ response, options }) => {
      if (response.status === 401) {
        router.push({ path: "/login" });
      }
    },
  };

  const params = defu(options, defaults);

  // return useFetch(url, params);
  try {
    const result = await useFetch(url, params);
    console.log("Fetch result:", result);
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
