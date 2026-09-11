import styles from './tasks.module.css';
import plusIcon from '../../assets/images/plus.svg';
import tasksIcon from '../../assets/images/tasksmodal.svg';
import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  date: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Buy groceries',
    date: 'Today',
    completed: true,
  },
  {
    id: 2,
    title: 'Call dentist',
    date: 'Oct 12',
    completed: false,
  },
  {
    id: 3,
    title: 'Review design mockups',
    date: 'Oct 14',
    completed: false,
  },
  {
    id: 4,
    title: 'Finish project report',
    date: 'Oct 15',
    completed: false,
  },
  {
    id: 5,
    title: 'Team standup notes',
    date: 'Tomorrow',
    completed: true,
  },
];

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleToggle = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={tasksIcon} alt="" />
        <h3>Мои задачи</h3>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <div className={styles.taskDiv} key={task.id}>
            <div className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
              <button
                className={`${styles.checkbox} ${task.completed ? styles.checked : ''}`}
                onClick={() => handleToggle(task.id)}
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

            <button className={`${styles.delete} material-symbols-outlined`}>delete</button>
          </div>
        ))}
      </div>
      <button className={styles.button}>
        {' '}
        <img className={styles.icon} src={plusIcon} alt="" /> Создать задачу
      </button>
    </div>
  );
}
