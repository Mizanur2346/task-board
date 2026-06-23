import { TaskForm } from './TaskForm';
import { TaskColumn } from './TaskColumn';

export function TaskBoard() {
  return (
    <>
      <TaskForm />

      <div className="task-board">
        <TaskColumn status="todo" />
        <TaskColumn status="in_progress" />
        <TaskColumn status="done" />
      </div>
    </>
  );
}