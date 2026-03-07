# TaskFlow – React + TypeScript

TaskFlow is a lightweight task management application built with React, Vite and TypeScript.  
It allows users to manage tasks through three distinct lists (Todo, Completed and Trash), with persistent storage using the browser's localStorage.

The project focuses on a clean UI, structured logic with custom hooks, and a modern component system using shadcn/ui.

---

## Live Demo

The application is deployed on Vercel and can be accessed here:

https://taskflow.nesalia.com

---

## Overview

TaskFlow is a browser-based task management application designed to keep task organization simple and efficient.

Users can create tasks, mark them as completed, delete them, restore them from the trash, or permanently remove them from storage.

The application runs entirely in the browser with no backend, using localStorage to persist data.

---

## Features

### Task creation

Tasks can be created using a dialog form with:

- Required title field
- Optional description field

If the title field is empty when submitting the form, a validation message appears above the input indicating that the title is required.

---

### Three task lists

The application organizes tasks into three separate lists:

**Todo List**

- Contains tasks that are active or in progress.

**Completed Tasks**

- Contains tasks marked as completed.
- Completed tasks appear greyed out and struck through.
- Clicking a completed task moves it back to the Todo list.

**Trash**

- Contains tasks deleted from either the Todo or Completed lists.
- Tasks in the trash can be:
  - Restored (returns to the Todo list)
  - Permanently deleted

---

### Permanent deletion

When permanently deleting a task from the Trash, a confirmation dialog appears.

This alert dialog asks the user to confirm the action before the task is permanently removed from localStorage.

---

### Data persistence

All tasks are stored locally in the browser using `localStorage`.

This ensures:

- Tasks persist after page refresh
- No backend or database is required
- Data remains specific to the current browser

---

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Tabler Icons
- Geist Font
- localStorage (browser persistence)
- npm (package manager)

---

## Project Structure

The project is structured to separate UI components from business logic using custom hooks.

```
src/
  assets/
  components/
  hooks/
    tasks/
    todolist/
```

---

## Hooks Architecture

Custom hooks are used to isolate application logic from UI components.

**tasks/**  
Contains hooks responsible for task-level logic and behavior.

**todolist/**  
Contains hooks responsible for managing task collections and list behavior.

This separation improves maintainability and scalability of the application.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## Run in development

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## Author

Sophie Wodey
