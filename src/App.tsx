import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <header className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-white to-blue-600 bg-clip-text text-transparent pb-2">
          Manage your tasks
        </h1>
        <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
      </header>
      <main className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <Todolist />
        </div>
      </main>
    </div>
  );
}

export default App;
