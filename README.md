# Todo List – React + TypeScript

A minimal single-page Todo application built with React, Vite and TypeScript.  
This application allows users to create, complete and delete tasks, with data persisted in the browser using localStorage.

---

## Overview

This is a lightweight browser-based Todo application featuring:

- Task creation via a form
- Required title field
- Optional description field
- Task completion toggle
- Task deletion
- Persistent storage using the browser's localStorage

The application is currently built as a single-page interface.

---

## Features

- Create tasks with:
  - Required title
  - Optional description
- Mark tasks as completed
- Delete tasks
- Persistent data using `localStorage`
- Clean UI built with Tailwind CSS
- Icons powered by Heroicons

### Planned Improvements

- UI/UX refinements
- Introduction of three separate lists:
  - Active tasks (Todo)
  - Completed tasks
  - Trash
- Automatic task transitions:
  - When completed → moves from Todo to Completed
  - When unchecked → moves back to Todo
  - When deleted → moves to Trash

---

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Heroicons
- localStorage (browser persistence)
- npm (package manager)

---

## Project Structure

The application uses local storage only (no backend), so the `src` folder contains only:

src/
  components/
  hook/
    tasks/
    todolist/

---

### Hooks Architecture

- `tasks/index.ts`  
  Contains custom hooks related to task logic and task-level behavior.

- `todoList/index.ts`  
  Contains custom hooks managing the todo list logic.

This separation keeps business logic isolated from UI components and ensures maintainability.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies: 
```npm install
```

---

## Run in development 

```npm run dev
```
The application will be available at the local development URL provided by Vite.

--- 

## Data Persistence 

All tasks are stored in the browser using localStorage.
No backend or external API is used.

Data remains available after page refresh but is specific to the browser.

---

### Author

Sophie Wodey


