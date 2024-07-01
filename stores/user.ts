// stores/user.ts

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
    },
    //clear
    clearUser() {
      this.user = null;
    },
  },
  // getters: {
  //   role: (state) => state.user?.role,
  // },
  getters: {
    role(state) {
      return state.user?.role;
    },
  },
});
