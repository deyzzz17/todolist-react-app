import { useState } from "react";

interface TaskCreationProps {
  onAddTask: (title: string, description: string) => void;
}

function TaskCreation({ onAddTask }: TaskCreationProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (title.trim() === "") return;
    onAddTask(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">New Task</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">
              Cancel
            </button>
            <button
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-blue-600 font-bold rounded-lg shadow-md shadow-blue-200 transition-all"
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
