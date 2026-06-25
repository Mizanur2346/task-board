import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login({ onSwitchToRegister }) {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(username, password);
    } catch {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        No account?{' '}
        <button type="button" onClick={onSwitchToRegister}>
          Register
        </button>
      </p>
    </div>
  );
}