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

  // const removeTask = (task: Task) => {
  //   localStorage.removeItem(task.id);
  // };

  return { getStoredTasks, saveTask };
};

export const useTasks = () => {
  const { getStoredTasks, saveTask } = useTaskStorage();
  const [tasks, setTasks] = useState<Task[]>(() =>
    getStoredTasks().filter((t) => t.status === "active"),
  );
  const [achievedTasks, setAchievedTasks] = useState<Task[]>(() =>
    getStoredTasks().filter((t) => t.status === "completed"),
  );
  //const [trashedTasks, setTrashedTasks] = useState<Task[]>([]);

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

  const deleteTask = (taskId: string) => {
    const taskToComplete = tasks.find((t) => t.id === taskId);
    const taskToUncomplete = achievedTasks.find((t) => t.id === taskId);

    if (taskToComplete) {
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    }

    if (taskToUncomplete) {
      setAchievedTasks((prev) => prev.filter((t) => t.id !== taskId));
    }
  };

  const completeTask = (taskId: string) => {
    const taskToComplete = tasks.find((t) => t.id === taskId);

    if (taskToComplete) {
      const updatedTask: Task = { ...taskToComplete, status: "completed" };
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
      setAchievedTasks((prev) => [...prev, updatedTask]);
      saveTask(updatedTask);
    }
  };

  const toggleUncompleted = (taskId: string) => {
    const taskToUncomplete = achievedTasks.find((t) => t.id === taskId);

    if (taskToUncomplete) {
      const updatedTask: Task = { ...taskToUncomplete, status: "active" };
      setAchievedTasks((prev) => prev.filter((t) => t.id !== taskId));
      setTasks((prev) => [...prev, updatedTask]);
      saveTask(updatedTask);
    }
  };

  return {
    tasks,
    achievedTasks,
    createTask,
    deleteTask,
    completeTask,
    toggleUncompleted,
  };
};
