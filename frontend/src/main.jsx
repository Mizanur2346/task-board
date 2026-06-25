import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TaskProvider } from './context/TaskContext';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </AuthProvider>
  </StrictMode>
);