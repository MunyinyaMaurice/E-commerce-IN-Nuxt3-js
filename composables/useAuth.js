// import { useFetch, useRuntimeConfig } from "#imports";
// export const useAuth = (request: any, opts = {}) => {
//   const config = useRuntimeConfig();
  
//   let accessToken: string | null = localStorage.getItem("accessToken");

//   // Handle null value for accessToken
//   if (!accessToken) {
//     // Handle null case accordingly, maybe throw an error or handle it differently based on your requirements
//     throw new Error("Access token not found");
//   }

//   const refreshToken = localStorage.getItem("refreshToken");

//   const refreshTokenIfNeeded = async () => {
//     try {
//       if (!refreshToken) {
//         throw new Error("Refresh token not found");
//       }
//       // const { data, error } = await fetch(`${config.public.apiBase}/auth/refresh`, {

//       const response  = await fetch(`${config.public.apiBase}/auth/refresh`, {
       
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ refreshToken }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to refresh token");
//       }

//       const data = await response.json();
//       accessToken = data.accessToken;
//       localStorage.setItem("accessToken", `${accessToken}`);
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//       throw error;
//     }
//   };

//   return useFetch(request, {
//     baseURL: config.public.apiBase,
//     onRequest: async ({ options }) => {
//       // Handle null value for accessToken
//       if (!accessToken) {
//         throw new Error("Access token not found");
//       }
      
//       options.headers = {
//         ...options.headers,
//         Authorization: `Bearer ${accessToken}`,
//       };
//     },
//     onRequestError: async ({ error }) => {
//       console.log("Request error:", error);
//       // Check if error object has response property
//       if (error.value && error.value.statusCode === 401) {
        
//         try {
//           await refreshTokenIfNeeded();
//           // Retry the original request with the new access token
//           return useFetch(request, {
//             baseURL: config.public.apiBase,
//             onRequest: ({ options }) => {
//               options.headers = {
//                 ...options.headers,
//                 Authorization: `Bearer ${accessToken}`,
//               };
//             },
//             ...opts,
//           });
//         } catch (refreshError) {
//           console.error("Error refreshing token:", refreshError);
//           throw refreshError;
//         }
//       }
//     },
//     onResponse: async ({ response }) => {
//       return response._data;
//     },
//     ...opts,
//   });
// };


// import { useFetch, useRuntimeConfig } from "#imports";


// export const useAuth = (request:any, opts = {}) => {
//   const config = useRuntimeConfig();
//   const accessToken = localStorage.getItem("accessToken");
//   // const apiBaseUrl = config.public.apiBase;

//   return useFetch(request, {
//     // apiBaseUrl: config.public.apiBase,
//     baseURL: config.public.apiBase,
//     onRequest({ options }) {
//       if (accessToken) {
//         options.headers = {
//           ...options.headers,
//           Authorization: `Bearer ${accessToken}`,
//         };
//       }
//     },
//     onRequestError({ error }) {
//       console.log(error);
//     },
//     onResponse({ response }) {
//       return response._data;
//     },
//     ...opts,
//   });
// };





// import { useFetch, useRuntimeConfig,UseFetchOptions ,KeyOfRes} from "#imports";

// export const useAuth = (
//   request: any,
//   opts:
//     | UseFetchOptions<
//         unknown,
//         (res: unknown) => unknown,
//         KeyOfRes<(res: unknown) => unknown>,
//         any
//       >
//     | undefined
// ) => {
//   const config = useRuntimeConfig();
//   // const userInfo = localStorage.getItem("user_details");
//   const accessToken = localStorage.getItem("accessToken");
//   const refreshToken = localStorage.getItem("refreshToken");

//   const parsedAccessToken = accessToken ? JSON.parse(accessToken) : null;

//   return useFetch(request, {
//     baseURL: config.public.apiBase,
//     onRequest({ request, options }) {
//       if (parsedAccessToken ) {
//         options.headers = {
//           Authorization: "Bearer " + parsedAccessToken,
//           Accept: "application/json",
//         };
//       } else {
//         options.headers = {
//           Accept: "application/json",
//         };
//       }
//     },
//     onRequestError({ request, options, error }) {
//       // Handle the request errors
//       if (error) {
//         console.log(error);
//       }
//     },
//     onResponse({ request, response, options }) {
//       // Process the response data
//       return response._data;
//     },
//     ...opts,
//   });
// };




import { useFetch, useRuntimeConfig } from "#imports";

export const useAuth = () => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBase;

  console.log("API Base URL:", apiBaseUrl);

  const login = async (email, password) => {
    try {
      const { data, error } = await useFetch(`${apiBaseUrl}auth/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (error.value) {
        throw new Error(error.value.data.message);
      }

      const { accessToken, refreshToken } = data.value;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return { accessToken, refreshToken };
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  const fetchWithAuth = async (url, options = {}) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
  
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  
    try {
      const fullUrl = `${apiBaseUrl}${url.startsWith("/") ? url.substring(1) : url}`;
      console.log(`Fetching: ${fullUrl}`);
      console.log(`Headers:`, headers);
  
      const { data, error } = await useFetch(fullUrl, {
        ...options,
        headers,
      });
  
      if (error.value) {
        console.error("Fetch error details:", error.value);
        if (error.value.statusCode === 401) {
          const response = await refreshToken(refreshToken);
          if (response.accessToken) {
            localStorage.setItem("accessToken", response.accessToken);
            return fetchWithAuth(url, options);
          } else {
            throw new Error("Unauthorized");
          }
        } else {
          throw error.value;
        }
      }
  
      console.log("Fetched data:", data.value); // Log the fetched data
      return data.value;
    } catch (err) {
      console.error("Fetch error:", err);
      throw err;
    }
  };
  

  const refreshToken = async (refreshToken) => {
    try {
      const { data, error } = await useFetch(`${apiBaseUrl}auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (error.value) {
        throw new Error(error.value.data.message);
      }

      return data.value;
    } catch (err) {
      console.error("Refresh token error:", err);
      throw err;
    }
  };

  return { login, fetchWithAuth };
};

