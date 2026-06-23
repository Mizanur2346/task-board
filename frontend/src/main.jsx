import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TaskProvider } from './context/TaskContext';
import { TaskBoard } from './features/tasks/TaskBoard';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <TaskBoard />
    </TaskProvider>
  </StrictMode>
);