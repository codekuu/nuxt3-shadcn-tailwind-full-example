<script setup lang="ts">
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bird,
  CornerDownLeft,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Share,
  Turtle,
} from "lucide-vue-next";

const models = ref([
  {
    value: "genesis",
    icon: Rabbit,
    name: "Genesis",
    description: "Our fastest model for general use cases.",
  },
  {
    value: "explorer",
    icon: Bird,
    name: "Explorer",
    description: "Performance and speed for efficiency.",
  },
  {
    value: "quantum",
    icon: Turtle,
    name: "Quantum",
    description: "The most powerful model for complex computations.",
  },
]);

const messages = ref([
  {
    role: "system",
    content: "Hello, how can I help you today?",
  },
  {
    role: "user",
    content: "I need help with my account.",
  },
]);

const messageModel = ref("");
const submitMessage = () => {
  if (messageModel.value) {
    messages.value.push({ role: "user", content: messageModel.value });
    messageModel.value = "";
  }
};
</script>

<template>
  <div class="flex flex-col px-4">
    <header
      class="sticky top-0 z-10 flex h-[57px] items-center gap-1 bg-background px-4"
    >
      <Drawer>
        <DrawerTrigger as-child>
          <Button variant="ghost" class="md:hidden">
            <Settings class="size-4" />
            Model Settings
          </Button>
        </DrawerTrigger>
        <DrawerContent class="max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Configuration</DrawerTitle>
            <DrawerDescription>
              Configure the settings for the model and messages.
            </DrawerDescription>
          </DrawerHeader>
          <div class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
            <fieldset class="grid gap-6 rounded-lg border p-4">
              <legend class="-ml-1 px-1 text-sm font-medium">Settings</legend>
              <div class="grid gap-3">
                <Label for="model">Model</Label>
                <Select>
                  <SelectTrigger
                    id="model"
                    class="items-start [&_[data-description]]:hidden"
                  >
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      :value="model.value"
                      v-for="model in models"
                      :key="model.value"
                    >
                      <div class="flex items-start gap-3 text-muted-foreground">
                        <Rabbit class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Codekuu
                            <span class="font-medium text-foreground">
                              {{ model.name }}
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            {{ model.description }}
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-3">
                <Label for="temperature">Temperature</Label>
                <Input id="temperature" type="number" placeholder="0.4" />
              </div>
              <div class="grid gap-3">
                <Label for="top-p">Top P</Label>
                <Input id="top-p" type="number" placeholder="0.7" />
              </div>
              <div class="grid gap-3">
                <Label for="top-k">Top K</Label>
                <Input id="top-k" type="number" placeholder="0.0" />
              </div>
            </fieldset>
            <fieldset class="grid gap-6 rounded-lg border p-4">
              <legend class="-ml-1 px-1 text-sm font-medium">Messages</legend>
              <div class="grid gap-3">
                <Label for="role">Role</Label>
                <Select default-value="system">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system"> System </SelectItem>
                    <SelectItem value="user"> User </SelectItem>
                    <SelectItem value="assistant"> Assistant </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-3">
                <Label for="content">Content</Label>
                <Textarea id="content" placeholder="You are a..." />
              </div>
            </fieldset>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
    <main class="grid flex-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <div class="relative hidden flex-col items-start gap-8 md:flex">
        <div class="grid w-full items-start gap-6">
          <fieldset class="grid gap-6 rounded-lg border p-4">
            <legend class="-ml-1 px-1 text-sm font-medium">Settings</legend>
            <div class="grid gap-3">
              <Label for="model">Model</Label>
              <Select>
                <SelectTrigger
                  id="model"
                  class="items-start [&_[data-description]]:hidden"
                >
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="genesis">
                    <div class="flex items-start gap-3 text-muted-foreground">
                      <Rabbit class="size-5" />
                      <div class="grid gap-0.5">
                        <p>
                          Codekuu
                          <span class="font-medium text-foreground">
                            Genesis
                          </span>
                        </p>
                        <p class="text-xs" data-description>
                          Our fastest model for general use cases.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="explorer">
                    <div class="flex items-start gap-3 text-muted-foreground">
                      <Bird class="size-5" />
                      <div class="grid gap-0.5">
                        <p>
                          Codekuu
                          <span class="font-medium text-foreground">
                            Explorer
                          </span>
                        </p>
                        <p class="text-xs" data-description>
                          Performance and speed for efficiency.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="quantum">
                    <div class="flex items-start gap-3 text-muted-foreground">
                      <Turtle class="size-5" />
                      <div class="grid gap-0.5">
                        <p>
                          Codekuu
                          <span class="font-medium text-foreground">
                            Quantum
                          </span>
                        </p>
                        <p class="text-xs" data-description>
                          The most powerful model for complex computations.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="grid gap-3">
              <Label for="temperature">Temperature</Label>
              <Input id="temperature" type="number" placeholder="0.4" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="grid gap-3">
                <Label for="top-p">Top P</Label>
                <Input id="top-p" type="number" placeholder="0.7" />
              </div>
              <div class="grid gap-3">
                <Label for="top-k">Top K</Label>
                <Input id="top-k" type="number" placeholder="0.0" />
              </div>
            </div>
          </fieldset>
          <fieldset class="grid gap-6 rounded-lg border p-4">
            <legend class="-ml-1 px-1 text-sm font-medium">Messages</legend>
            <div class="grid gap-3">
              <Label for="role">Role</Label>
              <Select default-value="system">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system"> System </SelectItem>
                  <SelectItem value="user"> User </SelectItem>
                  <SelectItem value="assistant"> Assistant </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="grid gap-3">
              <Label for="content">Content</Label>
              <Textarea
                id="content"
                placeholder="You are a..."
                class="min-h-[9.5rem]"
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div
        class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2"
      >
        <Badge variant="outline" class="absolute right-3 top-3 mr-4">
          Output
        </Badge>
        <div
          class="flex-1 max-h-[50vh] overflow-y-scroll mini-gray-scroll pr-2 mb-4"
        >
          <!-- V-for messages, if system do left side-->
          <div
            v-for="message in messages"
            :key="message.content"
            class="grid gap-2 mt-2"
          >
            <div
              v-if="message.role === 'system'"
              class="grid gap-1.5 items-start"
            >
              <p class="text-sm text-foreground">{{ message.content }}</p>
            </div>
            <div v-else class="grid gap-1.5 items-end justify-end">
              <p class="text-sm text-foreground bg-background p-1.5 rounded-lg">
                {{ message.content }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <Label for="message" class="sr-only"> Message </Label>
          <Textarea
            id="message"
            v-model="messageModel"
            placeholder="Type your message here..."
            class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            @keydown.enter.prevent="submitMessage"
          />
          <div class="flex items-center p-3 pt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost" size="icon" @click.prevent>
                    <Paperclip class="size-4" />
                    <span class="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top"> Attach File </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost" size="icon" @click.prevent>
                    <Mic class="size-4" />
                    <span class="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top"> Use Microphone </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button size="sm" class="ml-auto gap-1.5" @click="submitMessage">
              Send Message
              <CornerDownLeft class="size-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.mini-gray-scroll::-webkit-scrollbar {
  width: 6px;
}
.mini-gray-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(209, 213, 219, 0.5);
  border-radius: 9999px;
}
.mini-gray-scroll::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
