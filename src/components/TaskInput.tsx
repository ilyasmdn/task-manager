import React from 'react';

type TaskInputProps = {
  onAddTask: (taskName: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {

    const [task, setTask] = React.useState('');

    const handleClick = () => {
      if (task.trim()) {
        onAddTask(task);
        setTask('');
      }
    };

  return (
    <div className='py-6'>
      <h2 className='text-3xl text-gray-700 font-bold text-center'>Add a task</h2>
      <div className='pt-4 flex gap-4 items-center justify-center'>
        <input 
        type='text'
        className='w-full p-2 border border-gray-300 rounded-lg'
        placeholder='Add a task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <button 
        className='w-32 bg-green-600 text-white p-2 rounded-lg cursor-pointer hover:bg-green-700 transition duration-300'
        onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskInput;