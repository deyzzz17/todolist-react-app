import { useToggleTask } from "../hooks/tasks";

interface TasksProps {
  index: number;
  title: string;
  description: string;
  status: "active" | "completed" | "deleted";
  onDelete: () => void;
  onToggleStatus: () => void;
}

function Task({
  index,
  title,
  description,
  status,
  onDelete,
  onToggleStatus,
}: TasksProps) {
  const { isDone, toggle } = useToggleTask();

  const isCompleted = status === "completed";

  const isDeleted = status === "deleted";

  const handleCheck = () => {
    toggle();
    onToggleStatus();
  };

  return (
    <>
      <div
        className={`flex items-center p-4 transition-all duration-300 hover:bg-gray-50 ${isDone ? "opacity-50" : "opacity-100"}`}
      >
        <label className="flex items-start cursor-pointer w-full">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              name={"task" + index}
              disabled={isDeleted}
              checked={isCompleted}
              onChange={handleCheck}
              className={`
                        appearance-none w-6 h-6 rounded-full border-2 cursor-pointer
                        transition-all duration-200 ease-in-out
                        ${
                          isCompleted
                            ? "bg-blue-500 border-blue-500"
                            : "bg-white border-gray-300 group-hover:border-blue-400"
                        }
                      `}
            />
            {isCompleted && (
              <svg
                className="absolute w-3.5 h-3.5 text-white pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
          <div className="ml-4 flex flex-col flex-1">
            <span
              className={`font-bold transition-all ${
                isDeleted
                  ? "text-gray-400"
                  : isCompleted
                    ? "text-gray-300 line-through"
                    : "text-gray-800"
              }`}
            >
              {title}
            </span>
            <span
              className={`text-sm transition-all ${
                isDeleted
                  ? "text-gray-300"
                  : isCompleted
                    ? "text-gray-200"
                    : "text-gray-500"
              }`}
            >
              {description}
            </span>
          </div>
          {isDeleted && (
            <button
              className="group ml-4 p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              onClick={onToggleStatus}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 transition-transform duration-500 ease-in-out group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          )}
          <button
            className="ml-4 p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            onClick={onDelete}
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </label>
      </div>
    </>
  );
}

export default Task;
