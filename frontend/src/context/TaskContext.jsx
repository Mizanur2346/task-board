import { createContext, useContext, useState, useEffect } from 'react';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../api/tasks';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then(res => setTasks(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const addTask = async (data) => {
    const r = await createTask(data);
    setTasks(prev => [r.data, ...prev]);
  };

  const editTask = async (id, data) => {
    const r = await updateTask(id, data);
    setTasks(prev =>
      prev.map(t => t.id === id ? r.data : t)
    );
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(prev =>
      prev.filter(t => t.id !== id)
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        editTask,
        removeTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);