
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Register({ onSwitchToLogin }) {
  const { register } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await register(username, password);
    } catch {
      setError('Registration failed. Try another username.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

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

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{' '}
        <button type="button" onClick={onSwitchToLogin}>
          Login
        </button>
      </p>
    </div>
  );
}