import { useState } from "react";
import Todolist from "./components/Todolist";

interface TaskData {
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([
    { title: "Exemple", description: "Ceci est une tâche initiale" },
  ]);

  const handleAddTask = (title: string, description: string) => {
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Todolist tasks={tasks} onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
