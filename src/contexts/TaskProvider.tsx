import type { ReactNode } from "react";
import { TaskContext } from "./TaskContext";
import { useTasks } from "../hooks/todolist";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const taskLogic = useTasks();

  return (
    <TaskContext.Provider value={taskLogic}>{children}</TaskContext.Provider>
  );
};
