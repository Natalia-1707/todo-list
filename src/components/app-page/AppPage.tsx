import styles from './app-page.module.css';

function AppPage() {
  const buttons = [
    { id: 'tasks', title: 'Мои задачи' },
    { id: 'diary', title: 'Дневник' },
    { id: 'birthdays', title: 'Дни рождения' },
    { id: 'books', title: 'Мои книги и фильмы' },
    { id: 'motivation', title: 'Мотивашки' },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Привет, ИМЯ!</h2>
        <p>00:00:00</p>
      </div>
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <button key={button.id}>{button.title}</button>
        ))}
      </div>
    </div>
  );
}

export default AppPage;
