import { useTaskCreation } from "../hooks/tasks";
import { useManageForm } from "../hooks/tasks";

interface TaskCreationProps {
  onAddTask: (
    id: string,
    title: string,
    description: string,
    status: "active",
  ) => void;
}

function TaskCreation({ onAddTask }: TaskCreationProps) {
  const {
    title,
    description,
    isInvalid,
    setTitle,
    setDescription,
    resetForm,
    showError,
    triggerError,
  } = useTaskCreation();

  const { isOpen, open, close } = useManageForm();

  const handleCreate = () => {
    if (isInvalid) {
      triggerError();
      return;
    }
    onAddTask(crypto.randomUUID(), title, description, "active");
    resetForm();
    close();
  };

  const handleCancel = () => {
    resetForm();
    close();
  };

  if (!isOpen) {
    return (
      <>
        <button
          onClick={open}
          className="flex items-center justify-between py-3 px-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group w-full max-w-50 outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
            Add a new task
          </span>

          <div className="p-1.5 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </button>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">New Task</h3>
          </div>
          <div className="p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              {showError && (
                <p className="text-red-500 text-sm mb-1 font-medium">
                  Title is required
                </p>
              )}
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                  showError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-blue-500"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add more details..."
                rows={5}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>
          </div>
          <div className="p-6 bg-gray-50 flex justify-end gap-3">
            <button
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`px-6 py-2 font-bold rounded-lg shadow-md transition-all ${
                isInvalid
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                  : "bg-blue-600 hover:bg-blue-700 text-blue-600 shadow-blue-200"
              }`}
              onClick={handleCreate}
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCreation;
