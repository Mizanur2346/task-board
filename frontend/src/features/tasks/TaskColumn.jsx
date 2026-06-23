import { useTasks } from '../../context/TaskContext';
import { TaskCard } from './TaskCard';

const LABELS = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done'
};

export function TaskColumn({ status }) {
  const { tasks } = useTasks();
  const filtered = tasks.filter(task => task.status === status);

  return (
    <div className="task-column">
      <h2>{LABELS[status]} ({filtered.length})</h2>

      {filtered.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}