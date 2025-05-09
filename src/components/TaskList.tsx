type Task = {
  id: number;
  name: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const toggleComplete = (taskId: number) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
    {tasks.length !== 0 && <h2 className="text-3xl text-gray-700 font-bold text-center">Tasks</h2>}
    <ul className="mt-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center bg-white border border-gray-300 p-2 rounded shadow mb-2">
          <span className={task.completed ? "line-through text-gray-500" : ""}>{task.name}</span>
          <div>
          <button 
            onClick={() => toggleComplete(task.id)} 
            className={`${task.completed ? "bg-amber-600 hover:bg-amber-700" : "bg-green-600 hover:bg-green-700"} mx-2 text-white rounded p-2 cursor-pointer transition duration-300`}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
            <button onClick={() => deleteTask(task.id)} className="mx-2 bg-red-600 text-white rounded p-2 hover:bg-red-700 cursor-pointer transition duration-300">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TaskList;
