import Task from "./Task";
import TaskCreation from "./TaskCreation";
import { useTaskContext } from "../contexts/TaskContext";

function Todolist() {
  const { tasks, createTask, deleteTask, completeTask } = useTaskContext();

  return (
    <>
      <div className="p-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Todolist
          </h3>
          <div className="mb-6 w-full max-w-xs">
            <TaskCreation onAddTask={createTask} />
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <ul className="flex-col divide-y divide-gray-100">
            {tasks.map((task, index) => (
              <li key={task.id}>
                <Task
                  index={index}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  onDelete={() => deleteTask(task.id)}
                  onToggleStatus={() => completeTask(task.id)}
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
