import styles from './tasks.module.css';

interface CreateTaskProps {
  onAddTask: (title: string) => void;
  onClose: () => void;
}
export function CreateTask({ onClose }: CreateTaskProps) {
  return (
    <div className={styles.newTaskWrapper}>
      <h3>Новая задача</h3>
      <form>
        <div className={styles.input}>
          <label htmlFor="name">Название</label>
          <input id="name" />
        </div>
        <div className={styles.newTaskButtons}>
          <button type="submit">Запланировать</button>
          <button type="button" onClick={onClose}>
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}
