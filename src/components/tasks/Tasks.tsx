import styles from './tasks.module.css';
import plusIcon from '../../assets/images/plus.svg';
import tasksIcon from '../../assets/images/tasksmodal.svg';
import type { Task } from './task.types';
import { TaskItem } from './TaskItem';
import { Modal } from '../modal/Modal';
import { useState } from 'react';
import { CreateTask } from './CreateTask';

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
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleToggle = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const openCreateTask = () => {
    setIsCreateOpen(true);
  };

  const closeCreateTask = () => {
    setIsCreateOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={tasksIcon} alt="" />
        <h3>Мои задачи</h3>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDeleteTask} />
        ))}
      </div>
      <button className={styles.button} onClick={openCreateTask}>
        <img className={styles.icon} src={plusIcon} alt="" /> Создать задачу
      </button>
      {isCreateOpen && (
        <Modal accentColor="..." onClose={() => setIsCreateOpen(false)}>
          <CreateTask onAddTask={() => {}} onClose={closeCreateTask} />
        </Modal>
      )}
    </div>
  );
}
