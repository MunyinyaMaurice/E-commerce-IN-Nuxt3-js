// middlewares/roleBasedAccess.ts

import { RouteMiddleware } from "@nuxt/types";
import { useUserStore } from "~/stores/user";

const roleBasedAccessMiddleware: RouteMiddleware = (context) => {
  const userStore = useUserStore();
  const user = userStore.user;

  const role = user?.role;
  const allowedRoutes: { [key: string]: string[] } = {
    SUPER_ADMIN: [],
    ADMIN: [
      "/dashboard/department",
      "/dashboard/task/updateTask",
      "/dashboard/activeapplicant",
      "/dashboard/assignedTask",
      "/dashboard/task",
    ],
    COORDINATOR: [
      "/dashboard/assignedTask",
      "/dashboard/task/createTask",
      "/dashboard/task/updateTask",
      "/dashboard/task",
      "/dashboard/activeapplicant",
      "/dashboard/applicant",
    ],
    VOLUNTEER: ["/dashbaord/volunteer/assignedTo"],
  };

  // If the user is SUPER_ADMIN, they have access to all routes
  if (role === "SUPER_ADMIN") {
    return;
  }

  // Check if the user's role has access to the current route
  const isAllowed = allowedRoutes[role]?.some((route) =>
    context.route.path.startsWith(route)
  );

  if (!isAllowed) {
    context.redirect("/unauthorized"); // Redirect to an unauthorized page if access is denied
  }
};

export default roleBasedAccessMiddleware;

// // middlewares/roleBasedAccess.ts
// import { useUserStore } from "~/stores/user";

// export default defineNuxtRouteMiddleware((to, from, next) => {
//   const userStore = useUserStore();

//   const role = user?.role;
//   const allowedRoutes = {
//     SUPER_ADMIN: [],
//     ADMIN: [
//       "/dashboard/department/**",
//       "/dashboard/task/updateTask/**",
//       "/dashboard/activeapplicant",
//     ],
//     COORDINATOR: [
//       "/dashboard/assignedTask",
//       "/dashboard/task",
//       "/dashboard/activeapplicant",
//     ],
//     VOLUNTEER: ["/dashboard/assignedTask"],
//   };

//   // If the user is SUPER_ADMIN, they have access to all routes
//   if (role === "SUPER_ADMIN") {
//     return next();
//   }

//   // Check if the user's role has access to the current route
//   const isAllowed = allowedRoutes[role]?.some((route) =>
//     to.path.startsWith(route)
//   );

//   if (isAllowed) {
//     return next();
//   } else {
//     return next({ path: "/unauthorized" }); // Redirect to an unauthorized page if access is denied
//   }
// });
