import { useState } from "react";
import Todolist from "./components/Todolist";

interface TaskData {
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const handleAddTask = (title: string, description: string) => {
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (indexToDelete: number) => {
    const updatedTasks = tasks.filter(
      (_, currentIndex) => currentIndex !== indexToDelete,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <header className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome</h1>
        <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
      </header>
      <main className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <Todolist
            tasks={tasks}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
