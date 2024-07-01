// plugins/initUser.client.ts

import { useUserStore } from "~/stores/user";
import { fetchCurrentUser } from "~/services/authService";

export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore();

  try {
    const user = await fetchCurrentUser();
    userStore.setUser(user);
  } catch (error) {
    console.error("Failed to initialize user", error);
  }
});
