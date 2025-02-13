import { defineStore } from "pinia";
import type { User } from "@/types/user";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: {
      name: "codekuu",
      email: "nuxt@codekuu.com",
      avatar: "/avatars/shadcn.jpg",
    } as null | User,
  }),
  getters: {},
  actions: {},
});
