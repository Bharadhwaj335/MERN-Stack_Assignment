import { useState } from "react";

function AddTaskForm({ addTask }) {

  let [title, setTitle] = useState("");
  let [priority, setPriority] = useState("Low");
  let [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };

    addTask(newTask);

    setTitle("");
    setPriority("Low");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      {error && <p className="text-red-500">{error}</p>}

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2">
        Add Task
      </button>

    </form>
  );
}

export default AddTaskForm;