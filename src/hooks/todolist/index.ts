import { useState } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed";
};

export const useTaskStorage = () => {
  const getStoredTasks = (): Task[] => {
    const savedTasks: Task[] = [];
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

  const saveTask = (task: Task) => {
    localStorage.setItem(task.id, JSON.stringify(task));
  };

  const removeTask = (task: Task) => {
    localStorage.removeItem(task.id);
  };

  return { getStoredTasks, saveTask, removeTask };
};

export const useTasks = () => {
  const { getStoredTasks, saveTask, removeTask } = useTaskStorage();
  const [tasks, setTasks] = useState<Task[]>(() => getStoredTasks());

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
    const updateTask: Task[] = tasks.map((task, index) => {
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
