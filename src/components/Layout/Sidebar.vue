<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  BadgeCheck,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Plus,
} from "lucide-vue-next";
import { ref } from "vue";
import type { User } from "@/types/user";
import type { Application } from "@/types/settings";

const appConfig = useAppConfig();
const authStore = useAuthStore();
const settingsStore = useSettingsStore();

const user = computed(() => authStore.user || ({} as User));
const applications = computed(
  () => settingsStore.applications || ([] as Application[])
);

const activeApplication = ref(applications.value[0]);

function setActiveApplication(
  application: (typeof applications.value)[number]
) {
  activeApplication.value = application;
}

const router = useRouter();
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader class="border-b">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton
                size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div
                  class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                >
                  <component :is="activeApplication.icon" class="size-4" />
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">
                    {{ activeApplication.name }}
                  </span>
                  <span class="truncate text-xs">
                    {{ activeApplication.plan }}
                  </span>
                </div>
                <ChevronsUpDown class="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side="bottom"
              :side-offset="4"
            >
              <DropdownMenuLabel class="text-xs text-muted-foreground">
                Applications
              </DropdownMenuLabel>
              <DropdownMenuItem
                v-for="(application, index) in applications"
                :key="application.name"
                class="gap-2 p-2"
                @click="setActiveApplication(application)"
              >
                <div
                  class="flex size-6 items-center justify-center rounded-sm border"
                >
                  <component :is="application.icon" class="size-4 shrink-0" />
                </div>
                {{ application.name }}
                <DropdownMenuShortcut>⌘{{ index + 1 }}</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem class="gap-2 p-2">
                <div
                  class="flex size-6 items-center justify-center rounded-md border bg-background"
                >
                  <Plus class="size-4" />
                </div>
                <div class="font-medium text-muted-foreground">
                  Add application
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton :tooltip="'Dashboard'" @click="router.push('/')">
              <component :is="LayoutDashboard" class="size-4 mr-2" />
              <span class="text-sm font-semibold">Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup
        v-for="item in appConfig.application.sidebar"
        :key="item.header"
      >
        <SidebarGroupLabel>
          {{ item.header }}
        </SidebarGroupLabel>
        <SidebarMenu>
          <Collapsible
            v-if="item.items"
            v-for="sItem in item.items"
            :key="sItem.title"
            as-child
            :default-open="sItem?.isActive || false"
            class="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="sItem.title">
                  <component :is="sItem.icon" />
                  <span>{{ sItem.title }}</span>
                  <ChevronRight
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem
                    v-for="subItem in sItem.items"
                    :key="subItem.title"
                  >
                    <NuxtLink :href="subItem.to">
                      <SidebarMenuSubButton as-child>
                        <span>{{ subItem.title }}</span>
                      </SidebarMenuSubButton>
                    </NuxtLink>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton
                size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar class="h-8 w-8 rounded-lg">
                  <AvatarImage :src="user.avatar" :alt="user.name" />
                  <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">{{ user.name }}</span>
                  <span class="truncate text-xs">{{ user.email }}</span>
                </div>
                <ChevronsUpDown class="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side="bottom"
              align="end"
              :side-offset="4"
            >
              <DropdownMenuLabel class="p-0 font-normal">
                <div
                  class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                >
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage :src="user.avatar" :alt="user.name" />
                    <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ user.name }}</span>
                    <span class="truncate text-xs">{{ user.email }}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <NuxtLink
                  v-for="userLinks in appConfig.application.siderbarUserLinks"
                  :key="userLinks.title"
                  :to="userLinks.to"
                >
                  <DropdownMenuSeparator v-if="userLinks.separator" />

                  <DropdownMenuItem class="cursor-pointer">
                    <component :is="userLinks.icon" />
                    {{ userLinks.title }}
                  </DropdownMenuItem>
                </NuxtLink>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
