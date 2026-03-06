"use client";

import Todolist from "./components/todolist";
import AchievedList from "./components/achievedlist";
import Trash from "./components/trash";
import { TaskProvider } from "./components/task-provider";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconCircleCheck,
  IconListDetails,
  IconTrash,
} from "@tabler/icons-react";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TaskProvider>
        <div className="min-h-screen bg-background font-sans transition-colors duration-300">
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex h-20 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                  <IconCircleCheck size={24} stroke={2.5} />
                </div>
                <span className="text-2xl font-black tracking-tight text-foreground">
                  TaskFlow
                </span>
              </div>
              <div className="flex items-center">
                <ModeToggle />
              </div>
            </div>
          </header>

          <main className="w-full">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16">
              <div className="mb-10 space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
                  Dashboard
                </h1>
                <p className="text-lg text-muted-foreground">
                  Manage your workspace and track your progress.
                </p>
              </div>

              <Tabs defaultValue="todo" className="w-full space-y-6">
                <div className="flex items-center justify-between">
                  <TabsList className="grid grid-cols-3 w-full max-w-100">
                    <TabsTrigger value="todo" className="gap-2">
                      <IconListDetails size={16} />
                      <span>To do</span>
                    </TabsTrigger>
                    <TabsTrigger value="done" className="gap-2">
                      <IconCircleCheck size={16} />
                      <span>Achieved</span>
                    </TabsTrigger>
                    <TabsTrigger value="trash" className="gap-2">
                      <IconTrash size={16} />
                      <span>Trashed</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent
                  value="todo"
                  className="border-none p-0 outline-none"
                >
                  <Todolist />
                </TabsContent>

                <TabsContent
                  value="done"
                  className="border-none p-0 outline-none"
                >
                  <AchievedList />
                </TabsContent>

                <TabsContent
                  value="trash"
                  className="border-none p-0 outline-none"
                >
                  <Trash />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
