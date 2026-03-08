import type { ReactNode } from "react";
import { TaskContext } from "./task-context";
import { useTasks } from "../hooks/lists";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const taskLogic = useTasks();

  return (
    <TaskContext.Provider value={taskLogic}>{children}</TaskContext.Provider>
  );
};
