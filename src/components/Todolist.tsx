import Task from "./Task";
import TaskCreation from "./TaskCreation";
import { useTask } from "../hooks/todolist";

function Todolist() {
  const { tasks, createTask, deleteTask, completeTask } = useTask();
  return (
    <>
      <div className="p-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            My first todolist
          </h3>
          <div className="mb-6 w-full max-w-xs">
            <TaskCreation
              onAddTask={(t, d, s) => {
                createTask(t, d, s);
              }}
            />
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
                  status={task.status}
                  onDelete={() => deleteTask(index)}
                  onToggleStatus={() => completeTask(index)}
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
