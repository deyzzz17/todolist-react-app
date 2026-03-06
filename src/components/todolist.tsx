"use client";

import Task from "./task";
import TaskCreation from "./task-creation";
import { useTaskContext } from "./task-context";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Todolist() {
  const { tasks, createTask, softDeleteTask, completeTask } = useTaskContext();

  return (
    <>
      <div className="container max-w-4xl py-10 px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              My Todolist
            </h1>
            <p className="text-muted-foreground">
              Manage your daily tasks in style.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <TaskCreation onAddTask={createTask} />
          </div>
        </div>

        <Card className="shadow-sm border-border bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Tasks in progress ({tasks.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-sm text-muted-foreground italic">
                  No tasks for now. Start by creating one!
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {tasks.map((task, index) => (
                  <div key={task.id}>
                    <Task
                      index={index}
                      title={task.title}
                      description={task.description}
                      status={task.status}
                      onDelete={() => softDeleteTask(task.id)}
                      onToggleStatus={() => completeTask(task.id)}
                    />
                    {index < tasks.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
