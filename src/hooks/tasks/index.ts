import { useState } from "react";

export const useTaskCreation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const isInvalid = title.trim() === "";

  const handleSetTitle = (value: string) => {
    setTitle(value);
    if (showError) {
      setShowError(false);
    }
  };

  const triggerError = () => setShowError(true);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setShowError(false);
  };

  return {
    title,
    description,
    isInvalid,
    setTitle: handleSetTitle,
    setDescription,
    resetForm,
    showError,
    triggerError,
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
