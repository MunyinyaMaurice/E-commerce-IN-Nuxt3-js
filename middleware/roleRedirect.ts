// middleware/roleRedirect.ts

import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from, next) => {
  const userStore = useUserStore();

  if (!userStore.user) {
    return next("/login");
  }

  const role = userStore.role;

  if (role === "SUPER_ADMIN" && to.path !== "/dashboard/hospital") {
    return next("/dashboard/hospital");
  }

  if (role === "ADMIN" && to.path !== "/dashboard/department") {
    return next("/dashboard/department");
  }

  if (role === "COORDINATOR" && to.path !== "/dashboard/task") {
    return next("/dashboard/task");
  }

  if (role === "VOLUNTEER" && to.path !== "/dashboard/volunteer/assignedTo") {
    return next("/dashboard/volunteer/assignedTo");
  }

  return next();
});
