import styles from './app-page.module.css';

function AppPage() {
  const buttons = [
    { id: 'tasks', title: 'Мои задачи', icon: '✅' },
    { id: 'diary', title: 'Дневник', icon: '📖' },
    { id: 'birthdays', title: 'Дни рождения', icon: '🎈' },
    { id: 'books', title: 'Мои книги и фильмы', icon: '🎬' },
    { id: 'motivation', title: 'Мотивашки', icon: '⭐' },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Привет, ИМЯ!</h2>
        <p>00:00:00</p>
      </div>
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <button key={button.id}>
            <span className={styles.icon}>{button.icon}</span>
            <span>{button.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppPage;
