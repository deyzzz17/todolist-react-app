"use client";

import Task from "./task";
import { useTaskContext } from "./task-context";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconChecklist } from "@tabler/icons-react";

export default function AchievedList() {
  const { achievedTasks, softDeleteTask, restoreTask } = useTaskContext();

  return (
    <>
      <div className="container max-w-4xl py-10 px-4 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <IconChecklist size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Achieved Tasks
            </h3>
            <p className="text-sm text-muted-foreground">
              Congrats! Here's what you've done.
            </p>
          </div>
        </div>

        <Card className="shadow-sm border-border bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex justify-between">
              <span>Archive</span>
              <span>{achievedTasks.length} achieved</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {achievedTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-sm text-muted-foreground italic">
                  Nothing here at the moment. Complete a task to see it appear!
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                {achievedTasks.map((task, index) => (
                  <div key={task.id}>
                    <Task
                      index={index}
                      title={task.title}
                      description={task.description}
                      status={task.status}
                      onDelete={() => softDeleteTask(task.id)}
                      onToggleStatus={() => restoreTask(task.id)}
                    />
                    {index < achievedTasks.length - 1 && (
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
