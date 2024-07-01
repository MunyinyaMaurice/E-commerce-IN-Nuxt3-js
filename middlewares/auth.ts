import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return navigateTo("/login");
  }

  await userStore.fetchUser();
  const user = userStore.user;

  if (!user) {
    return navigateTo("/login");
  }
});
