import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);


  const addTask = (task: string) => {
    const newTask = {
      id: tasks.length + 1,
      name: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };


  return (
    <div className=''>
      <Header />
      <main className='px-10 py-5'>
        <TaskInput onAddTask={addTask}/>
        <TaskList tasks={tasks} setTasks={setTasks} />
        <TaskSummary tasks={tasks} />
      </main>
    </div>
  )
}

export default App