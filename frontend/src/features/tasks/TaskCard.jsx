import { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

export function TaskCard({ task }) {
  const { editTask, removeTask } = useTasks();

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const today = new Date().toISOString().split('T')[0];

  const isOverdue =
    task.due_date &&
    task.status !== 'done' &&
    task.due_date < today;

  const handleSave = async () => {
    await editTask(task.id, {
      title,
      description
    });

    setEditing(false);
  };

  const handleStatusChange = (e) => {
    editTask(task.id, {
      status: e.target.value
    });
  };

  if (editing) {
    return (
      <div className="task-card">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleSave}>
          Save
        </button>
      </div>
    );
  }

  return (
    <div className={`task-card ${isOverdue ? 'task-overdue' : ''}`}>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p className={`priority ${task.priority}`}>
        {task.priority === 'high' && '🔴 High Priority'}
        {task.priority === 'medium' && '🟡 Medium Priority'}
        {task.priority === 'low' && '🟢 Low Priority'}
      </p>

      {task.due_date && (
        <p className={`due-date ${isOverdue ? 'overdue' : ''}`}>
          📅 Due: {task.due_date}
          {isOverdue && ' ⚠️ Overdue'}
        </p>
      )}

      <div className="task-actions">
        <select
          value={task.status}
          onChange={handleStatusChange}
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <button onClick={() => setEditing(true)}>
          Edit
        </button>

        <button onClick={() => removeTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}