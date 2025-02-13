<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface Breadcrumb {
  name: string;
  path: string;
}

const route = useRoute();

const breadcrumbs = computed(() => {
  const crumbs = [] as Breadcrumb[];
  route.path.split("/").forEach((name) => {
    if (!name) return;
    const fullPath = route.path.split(`/${name}`)[0];
    const path = fullPath === `/${name}` ? "/" : fullPath;
    crumbs.push({ name, path });
  });
  return crumbs;
}) as Ref<Breadcrumb[]>;
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center justify-between w-full px-4">
      <div class="flex items-center gap-2">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList class="hidden md:block">
            <BreadcrumbItem
              v-for="(breadcrumb, i) in breadcrumbs"
              :key="i"
              class="mr-2"
            >
              <BreadcrumbLink :href="breadcrumb.path" class="flex items-center">
                {{ breadcrumb.name }}
              </BreadcrumbLink>
              <Icon
                name="radix-icons:caret-right"
                class="w-4 h-4"
                v-if="i < breadcrumbs.length - 1"
              />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div class="flex items-center gap-2">
        <Search class="hidden md:flex" />
        <ThemeToggleNav />
      </div>
    </div>
  </header>
</template>
