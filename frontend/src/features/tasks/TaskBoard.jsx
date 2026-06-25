import { useState } from 'react';
import { TaskForm } from './TaskForm';
import { TaskColumn } from './TaskColumn';
import { useAuth } from '../../context/AuthContext';

export function TaskBoard() {
  const [search, setSearch] = useState('');
  const { logout } = useAuth();

  return (
    <>
      <div className="app-header">
        <h1>Task Board</h1>
        <p>Manage your tasks efficiently</p>

        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </div>

      <TaskForm />

      <div className="task-board">
        <TaskColumn status="todo" search={search} />
        <TaskColumn status="in_progress" search={search} />
        <TaskColumn status="done" search={search} />
      </div>

      <div className="logout-container">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}