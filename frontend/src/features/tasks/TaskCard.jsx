import { useTasks } from '../../context/TaskContext';

export function TaskCard({ task }) {
  const { editTask, removeTask } = useTasks();

  const handleStatusChange = (e) => {
    editTask(task.id, { status: e.target.value });
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <select value={task.status} onChange={handleStatusChange}>
        <option value="todo">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
}