import styles from './tasks.module.css';
import { useState } from 'react';

interface CreateTaskProps {
  onAddTask: (title: string, date: string) => void;
  onClose: () => void;
  initialTitle?: string;
  initialDate?: string;
  isEditing?: boolean;
}

const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export function CreateTask({
  onAddTask,
  onClose,
  initialTitle = '',
  initialDate = '',
  isEditing = false,
}: CreateTaskProps) {
  const [title, setTitle] = useState(initialTitle);
  const [date, setDate] = useState(initialDate || getToday());

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask(title.trim(), date);
    onClose();
  };

  return (
    <div className={styles.newTaskWrapper}>
      <h3>{isEditing ? 'Редактировать задачу' : 'Новая задача'}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="name">Название</label>
          <input id="name" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>

        <div className={styles.input}>
          <label htmlFor="date">Дата</label>
          <input
            id="date"
            type="date"
            min={getToday()}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className={styles.newTaskButtons}>
          <button type="submit"> {isEditing ? 'Сохранить' : 'Запланировать'}</button>
          <button type="button" onClick={onClose}>
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}
