import styles from './tasks.module.css';
import { useState } from 'react';

interface CreateTaskProps {
  onAddTask: (title: string) => void;
  onClose: () => void;
  initialTitle?: string;
  isEditing?: boolean;
}
export function CreateTask({
  onAddTask,
  onClose,
  initialTitle = '',
  isEditing = false,
}: CreateTaskProps) {
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask(title.trim());
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
