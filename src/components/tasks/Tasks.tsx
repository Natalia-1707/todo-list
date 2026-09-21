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
    date: '2026-09-21',
    completed: true,
  },
  {
    id: 2,
    title: 'Call dentist',
    date: '2026-09-21',
    completed: false,
  },
];

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

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

  const handleAddTask = (title: string, date: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      date,
      completed: false,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const openEditTask = (id: number) => {
    setEditingTaskId(id);
  };

  const closeEditTask = () => {
    setEditingTaskId(null);
  };

  const handleEditTask = (title: string, date: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === editingTaskId ? { ...task, title, date } : task)),
    );
  };

  const editingTask = tasks.find((task) => task.id === editingTaskId);

  const sortedTasks = [...tasks].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={tasksIcon} alt="" />
        <h3>Мои задачи</h3>
      </div>
      <div className={styles.tasks}>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDeleteTask}
            onEdit={openEditTask}
          />
        ))}
      </div>
      <button className={styles.button} onClick={openCreateTask}>
        <img className={styles.icon} src={plusIcon} alt="" /> Создать задачу
      </button>
      {isCreateOpen && (
        <Modal accentColor="var(--color-tasks-border)" onClose={closeCreateTask}>
          <CreateTask onAddTask={handleAddTask} onClose={closeCreateTask} />
        </Modal>
      )}

      {editingTask && (
        <Modal accentColor="var(--color-tasks-border)" onClose={closeEditTask}>
          <CreateTask
            initialTitle={editingTask.title}
            initialDate={editingTask.date}
            isEditing
            onAddTask={handleEditTask}
            onClose={closeEditTask}
          />
        </Modal>
      )}
    </div>
  );
}
