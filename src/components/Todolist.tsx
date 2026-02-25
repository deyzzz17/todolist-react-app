import Task from "./Task";
import TaskCreation from "./TaskCreation";
import { useState } from "react";

interface TaskData {
  title: string;
  description: string;
}

const useTodoLogic = () => {
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

  return {
    tasks,
    handleAddTask,
    handleDeleteTask,
  };
};

const useCreateTask = () => {
  const [isCreate, setIsCreate] = useState(false);
  const create = () => setIsCreate(!isCreate);
  return { isCreate, create };
};

function Todolist() {
  const { tasks, handleAddTask, handleDeleteTask } = useTodoLogic();
  const { isCreate, create } = useCreateTask();
  return (
    <>
      <div className="p-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            My first todolist
          </h3>
          <div className="mb-6 w-full max-w-xs">
            {isCreate && (
              <TaskCreation
                onAddTask={(t, d) => {
                  handleAddTask(t, d);
                  create();
                }}
                onClose={create}
              />
            )}
            <div className="flex items-center justify-between py-2 px-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:text-blue-500 transition-all cursor-pointer group w-full max-w-3xs">
              <h4 className="font-medium">Add a new task</h4>
              <button
                className="p-2 bg-blue-50 text-gray-700 rounded-full hover:bg-blue-600 hover:text-blue-600 transition-all outline-none focus:outline-none"
                onClick={create}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <ul className="flex-col divide-y divide-gray-100">
            {tasks.map((task, index) => (
              <li key={index}>
                <Task
                  index={index}
                  title={task.title}
                  description={task.description}
                  onDelete={() => handleDeleteTask(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todolist;
