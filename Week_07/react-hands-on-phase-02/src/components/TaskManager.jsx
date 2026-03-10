import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {

  let [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks(prev => [...prev, task]);
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const completedCount = tasks.filter(t => t.completed).length;
  return (
    <div className="bg-white p-6  rounded-lg shadow w-[600px]">

      <h1 className="text-2xl  text-center font-bold mb-4">Task Manager</h1>

      <AddTaskForm addTask={addTask} />

      <div className="my-4">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed: {completedCount}</p>
      </div>

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;