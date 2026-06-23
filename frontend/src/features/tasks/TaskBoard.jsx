import { TaskForm } from './TaskForm';
import { TaskColumn } from './TaskColumn';

export function TaskBoard() {
  return (
    <>
      <div className="app-header">
        <h1>Task Board</h1>
        <p>Manage your tasks efficiently</p>
      </div>

      <TaskForm />

      <div className="task-board">
        <TaskColumn status="todo" />
        <TaskColumn status="in_progress" />
        <TaskColumn status="done" />
      </div>
    </>
  );
}