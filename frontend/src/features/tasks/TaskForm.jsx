import { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

export function TaskForm() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await addTask({
      title,
      description,
      due_date: dueDate || null,
      priority,
      status: 'todo'
    });

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}