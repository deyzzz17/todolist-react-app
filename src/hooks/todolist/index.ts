import { useState } from "react";

interface TaskData {
  title: string;
  description: string;
  status: "active" | "completed";
}

export const useTask = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const createTask = (
    title: string,
    description: string,
    status: "active" | "completed",
  ) => {
    const newTask = { title, description, status };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (indexToDelete: number) => {
    const updatedTasks = tasks.filter(
      (_, currentIndex) => currentIndex !== indexToDelete,
    );
    setTasks(updatedTasks);
  };

  const completeTask = (indexToToggle: number) => {
    const updateTask: TaskData[] = tasks.map((task, index) => {
      if (index === indexToToggle) {
        return {
          ...task,
          status: task.status === "active" ? "completed" : "active",
        };
      }
      return task;
    });
    setTasks(updateTask);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    completeTask,
  };
};
