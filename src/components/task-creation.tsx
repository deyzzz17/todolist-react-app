"use client";

import { IconPlus, IconAlertCircle } from "@tabler/icons-react"; // Ajout d'une petite icône d'alerte
import { useTaskCreation, useManageForm } from "../hooks/tasks";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TaskCreationProps {
  onAddTask: (
    id: string,
    title: string,
    description: string,
    status: "active",
  ) => void;
}

export default function TaskCreation({ onAddTask }: TaskCreationProps) {
  const {
    title,
    description,
    isInvalid,
    setTitle,
    setDescription,
    resetForm,
    showError,
    triggerError,
  } = useTaskCreation();

  const { isOpen, open, close } = useManageForm();

  const handleCreate = () => {
    if (isInvalid) {
      triggerError(); // Active l'affichage de l'erreur si le titre est vide
      return;
    }
    onAddTask("task-" + crypto.randomUUID(), title, description, "active");
    resetForm();
    close();
  };

  const handleOpenChange = (openState: boolean) => {
    if (!openState) {
      resetForm();
      close();
    } else {
      open();
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full max-w-64 justify-between h-12 px-6 shadow-sm group"
          >
            <span className="font-medium text-muted-foreground group-hover:text-foreground">
              Add a new task
            </span>
            <div className="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors ml-4">
              <IconPlus className="size-4" strokeWidth={3} />
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>
              Add a title and description for your task.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none">
                  Title
                </label>
                {showError && (
                  <p className="text-destructive text-xs font-semibold flex items-center gap-1 animate-in fade-in slide-in-from-right-1">
                    <IconAlertCircle size={12} />
                    Title is required
                  </p>
                )}
              </div>

              <Input
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={cn(
                  "transition-all",
                  showError &&
                    "border-destructive focus-visible:ring-destructive bg-destructive/5",
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Description
              </label>
              <Textarea
                placeholder="Add more details..."
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none"
              />
            </div>
          </div>

          <DialogFooter className="flex-row gap-2 sm:justify-end">
            <Button variant="ghost" onClick={() => handleOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreate} className="bg-primary px-8">
              Create Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
