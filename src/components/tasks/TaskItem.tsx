import styles from './tasks.module.css';
import type { Task } from './task.types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className={styles.taskDiv} key={task.id}>
      <div className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
        <button
          className={`${styles.checkbox} ${task.completed ? styles.checked : ''}`}
          onClick={() => onToggle(task.id)}
          type="button"
        >
          {task.completed && '✓'}
        </button>

        <div className={styles.info}>
          <span className={`${styles.title} ${task.completed ? styles.completedTitle : ''}`}>
            {task.title}
          </span>
          <span className={styles.date}>{task.date}</span>
        </div>
      </div>
      <div className={styles.taskItemButtons}>
        <button className={`${styles.edit} material-symbols-outlined`}>edit</button>
        <button
          className={`${styles.delete} material-symbols-outlined`}
          onClick={() => onDelete(task.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}
