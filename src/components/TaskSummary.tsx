interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TaskSummary = ({ tasks }: { tasks: Task[] }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="mt-4">
      <h2 className="text-3xl text-gray-700 font-bold text-center">Task Summary</h2>
      <div className="mt-4 bg-gray-200 p-4 rounded-lg shadow-md">
        <p className="text-gray-700">Total Tasks: {totalTasks}</p>
        <p className="text-green-500">Completed: {completedTasks}</p>
        <p className="text-amber-600">Remaining: {remainingTasks}</p>
        <p className="text-blue-500">Progress: {completionRate}%</p>
      </div>
    </div>
  );
};

export default TaskSummary;
