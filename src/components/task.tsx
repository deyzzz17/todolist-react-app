"use client";

import { IconRotateClockwise, IconTrash } from "@tabler/icons-react";
import { useToggleTask } from "../hooks/tasks";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface TasksProps {
  index: number;
  title: string;
  description?: string;
  status: "active" | "completed" | "deleted";
  onDelete: () => void;
  onToggleStatus: () => void;
}

export default function Task({
  index,
  title,
  description,
  status,
  onDelete,
  onToggleStatus,
}: TasksProps) {
  const { isDone, toggle } = useToggleTask();

  const isCompleted = status === "completed";
  const isDeleted = status === "deleted";

  const handleCheck = () => {
    toggle();
    onToggleStatus();
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center space-x-4 p-4 transition-all duration-300 border-b last:border-0",
          "hover:bg-muted/50",
          (isDone || isCompleted) && "opacity-60",
        )}
      >
        <div className="flex items-center">
          <Checkbox
            id={`task-${index}`}
            checked={isCompleted}
            onCheckedChange={handleCheck}
            disabled={isDeleted}
            className="h-5 w-5 rounded-full"
          />
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <label
            htmlFor={`task-${index}`}
            className={cn(
              "text-sm font-medium leading-none cursor-pointer select-none transition-all",
              isCompleted && "text-muted-foreground line-through",
              isDeleted && "text-muted-foreground italic",
            )}
          >
            {title}
          </label>
          {description && (
            <p className="text-xs text-muted-foreground mt-1 truncate">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1">
          {isDeleted ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleStatus}
                className="h-8 w-8 text-muted-foreground hover:text-primary transition-transform hover:rotate-180"
              >
                <IconRotateClockwise className="size-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  >
                    <IconTrash className="size-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the task <strong>"{title}"</strong> from your local
                      storage.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete} variant="destructive">
                      Delete permanently
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={onDelete}
              className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            >
              <IconTrash className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
