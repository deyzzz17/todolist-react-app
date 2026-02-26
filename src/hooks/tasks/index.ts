import { useState } from "react";

export const useTaskCreation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isInvalid = title.trim() === "";

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  return {
    title,
    description,
    isInvalid,
    setTitle,
    setDescription,
    resetForm,
  };
};

export const useToggleTask = () => {
  const [isDone, setIsDone] = useState(false);
  const toggle = () => setIsDone(!isDone);
  return { isDone, toggle };
};

export const useManageForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
};
