import Task from "./Task";
import { useTaskContext } from "../contexts/TaskContext";

function AchievedList() {
  const { achievedTasks, softDeleteTask, toggleUncompleted } = useTaskContext();

  return (
    <>
      <div className="p-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Task completed
          </h3>
        </div>
        <div className="w-full max-w-4xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <ul className="flex-col divide-y divide-gray-100">
            {achievedTasks.map((task, index) => (
              <li key={task.id}>
                <Task
                  index={index}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  onDelete={() => softDeleteTask(task.id)}
                  onToggleStatus={() => toggleUncompleted(task.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AchievedList;
