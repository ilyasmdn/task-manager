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
    <ul className="mt-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center bg-white border border-gray-300 p-2 rounded shadow mb-2">
          <span className={task.completed ? "line-through text-gray-500" : ""}>{task.name}</span>
          <div>
            <button onClick={() => toggleComplete(task.id)} className="mx-2 text-green-600">
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)} className="mx-2 text-red-600">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
