function TaskItem({ task, toggleTask, deleteTask }) {

    return (

        <div className="border p-3 flex justify-between items-center">

            <div>

                <p className="font-medium">
                    {task.title}
                </p>

                <p className="text-sm text-gray-500">
                    Priority : {task.priority}
                </p>

                {task.completed && (
                    <span className="text-green-600 text-sm font-semibold">
                        Completed
                    </span>
                )}

            </div>

            <div className="space-x-2">

                <button onClick={() => toggleTask(task.id)}className="bg-green-500 text-white px-2 py-1">
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1">Delete</button>

            </div>

        </div>

    )

}

export default TaskItem