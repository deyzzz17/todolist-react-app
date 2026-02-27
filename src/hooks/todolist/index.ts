import { useState } from "react";

interface TaskData {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed";
}

export const useStockageTask = () => {
  const getStoredTasks = (): TaskData[] => {
    const savedTasks: TaskData[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const item = localStorage.getItem(key);
        if (item) {
          savedTasks.push(JSON.parse(item));
        }
      }
    }
    return savedTasks;
  };

  const saveTask = (task: TaskData) => {
    localStorage.setItem(task.id, JSON.stringify(task));
  };

  const removeTask = (task: TaskData) => {
    localStorage.removeItem(task.id);
  };

  return { getStoredTasks, saveTask, removeTask };
};

export const useTask = () => {
  const { getStoredTasks, saveTask, removeTask } = useStockageTask();
  const [tasks, setTasks] = useState<TaskData[]>(() => getStoredTasks());

  const createTask = (
    id: string,
    title: string,
    description: string,
    status: "active" | "completed",
  ) => {
    const newTask = { id, title, description, status };
    setTasks([...tasks, newTask]);
    saveTask(newTask);
  };

  const deleteTask = (indexToDelete: number) => {
    const updatedTasks = tasks.filter(
      (_, currentIndex) => currentIndex !== indexToDelete,
    );
    setTasks(updatedTasks);
    removeTask(tasks[indexToDelete]);
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
    removeTask(tasks[indexToToggle]);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    completeTask,
  };
};
