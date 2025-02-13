import { defineStore } from "pinia";
import type { Application } from "@/types/settings";
import { Github, Disc2, GlobeLock } from "lucide-vue-next";

export const useSettingsStore = defineStore("settingsStore", {
  state: () => ({
    applications: [
      {
        name: "Github Inc",
        icon: Github,
        plan: "Enterprise",
      },
      {
        name: "Discord Corp.",
        icon: Disc2,
        plan: "Enterprise",
      },
      {
        name: "Security Corp.",
        icon: GlobeLock,
        plan: "Overpowered",
      },
    ] as null | Application[],
  }),
  getters: {},
  actions: {},
});
