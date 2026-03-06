"use client";

import Task from "./task";
import { useTaskContext } from "./task-context";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTrashX } from "@tabler/icons-react";

export default function Trash() {
  const { trashedTasks, deleteTask, restoreTask } = useTaskContext();

  return (
    <>
      <div className="container max-w-4xl py-10 px-4 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-destructive/10 text-destructive rounded-lg">
            <IconTrashX size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Trash
            </h3>
            <p className="text-sm text-muted-foreground">
              The tasks here will be permanently deleted if you click on the
              delete icon.
            </p>
          </div>
        </div>

        <Card className="shadow-sm border-border bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex justify-between">
              <span>Delete Zone</span>
              <span>{trashedTasks.length} element(s)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {trashedTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-sm text-muted-foreground italic">
                  The trash can is empty.
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {trashedTasks.map((task, index) => (
                  <div key={task.id}>
                    <Task
                      index={index}
                      title={task.title}
                      description={task.description}
                      status={task.status}
                      onDelete={() => deleteTask(task.id)}
                      onToggleStatus={() => restoreTask(task.id)}
                    />
                    {index < trashedTasks.length - 1 && (
                      <Separator className="mx-4 w-auto opacity-50" />
                    )}
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
