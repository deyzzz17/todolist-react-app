import { createContext, useContext } from "react";
import { useTasks } from "../hooks/lists";

export type TaskContextType = ReturnType<typeof useTasks>;

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error(
      "useTaskContext doit être utilisé à l'intérieur d'un TaskProvider",
    );
  }
  return context;
};
