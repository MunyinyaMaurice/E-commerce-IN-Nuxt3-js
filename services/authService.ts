// services/authService.ts

import { useIFetch } from "~/composables/useIFetch";

export async function fetchCurrentUser() {
  const { data, error } = await useIFetch("users/current_user");

  if (error.value) {
    throw new Error("Failed to fetch current user");
  }

  return data.value;
}
