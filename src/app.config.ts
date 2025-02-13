import type { SidebarItems } from "./types/appconfig";
import {
  Terminal,
  BookOpen,
  User,
  CreditCard,
  LogOut,
  Settings,
} from "lucide-vue-next";

export default defineAppConfig({
  application: {
    name: "SongGuess.app",
    header: {
      title: "SongGuess",
      description: "Join, pick and guess the songs. It's that simple.",
    },
    description: "A fun game to guess songs with your friends.",
    company: "Codekuu",
    version: "1.0.0",
    to: "https://songguess.app",
    logo: "/assets/logo.svg",
    sidebar: [
      {
        header: "Platform",
        items: [
          {
            title: "AI Playground",
            to: "/playground",
            icon: Terminal,
            isActive: true,
            items: [
              {
                title: "Chatbot",
                to: "/playground/chat",
              },
            ],
          },
        ],
      } as SidebarItems,
    ],
    siderbarUserLinks: [
      {
        title: "Billing",
        to: "/account/billing",
        icon: CreditCard,
        separator: false,
      },
      {
        title: "Settings",
        to: "/account/settings",
        icon: Settings,
        separator: false,
      },
      {
        title: "Logout",
        to: "/auth/sign-in",
        icon: LogOut,
        separator: true,
      },
    ],
  },
});
