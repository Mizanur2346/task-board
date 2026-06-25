import { useTasks } from '../../context/TaskContext';
import { TaskCard } from './TaskCard';

const LABELS = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done'
};

export function TaskColumn({ status, search }) {
  const { tasks } = useTasks();

  const filtered = tasks.filter(task => {
    const matchesStatus = task.status === status;

    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="task-column">
      <h2>
        {LABELS[status]} ({filtered.length})
      </h2>

      {filtered.map(task => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}