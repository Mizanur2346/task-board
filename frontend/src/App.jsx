import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Login from './pages/Login';
import Register from './pages/Register';
import { TaskBoard } from './features/tasks/TaskBoard';

export default function App() {
  const { isAuthenticated } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (!isAuthenticated) {
    return showRegister ? (
      <Register onSwitchToLogin={() => setShowRegister(false)} />
    ) : (
      <Login onSwitchToRegister={() => setShowRegister(true)} />
    );
  }

  return (
    <TaskProvider>
      <TaskBoard />
    </TaskProvider>
  );
}