import Todolist from "./components/Todolist";
import AchievedList from "./components/AchievedList";
import { TaskProvider } from "./contexts/TaskProvider";

function App() {
  return (
    <div className="min-h-screen w-screen bg-neutral-50 flex flex-col font-sans">
      <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-neutral-900 rounded-md flex items-center justify-center shadow-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">TaskFlow</span>
          </div>
        </div>
      </header>
      <TaskProvider>
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-gray-950 to-gray-500 pb-1">
                Dashboard
              </h1>
              <p className="text-lg text-neutral-500 font-medium mt-2 tracking-tight">
                Manage your workspace and track your progress.
              </p>
            </div>
          </div>
          <div className="w-full bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-6 lg:p-8">
              <Todolist />
            </div>

            <div className="w-full lg:w-px h-px lg:h-auto bg-neutral-200"></div>

            <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-neutral-50/50">
              <AchievedList />
            </div>
          </div>
        </main>
      </TaskProvider>
    </div>
  );
}

export default App;
