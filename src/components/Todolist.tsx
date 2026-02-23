import Task from "./Task";

interface TaskData {
  title: string;
  description: string;
}

interface TodolistProps {
  tasks: TaskData[];
}

function Todolist({ tasks }: TodolistProps) {
  return (
    <>
      <h1>My first todolist</h1>
      <div className="w-full max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <ul className="flex flex-col divide-y divide-gray-100">
          {tasks.map((task, index) => (
            <li key={index}>
              <Task
                index={index}
                title={task.title}
                description={task.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todolist;
