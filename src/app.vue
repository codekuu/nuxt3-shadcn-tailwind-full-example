<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const route = useRoute();
const shouldShowSidebar = computed(() => {
  return !route.path.includes("/auth");
});
</script>

<template>
  <SidebarProvider>
    <LayoutSidebar v-if="shouldShowSidebar" />
    <SidebarInset>
      <LayoutNavigationBar v-if="shouldShowSidebar" />
      <Separator v-if="shouldShowSidebar" />
      <div class="flex flex-1 flex-col gap-4 pt-0">
        <NuxtPage />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
