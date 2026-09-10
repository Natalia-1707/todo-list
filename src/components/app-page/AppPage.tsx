import styles from './app-page.module.css';
import { DateTime } from '../date-time/DateTime';
import tasksIcon from '../../assets/images/tasks.svg';
import diaryIcon from '../../assets/images/diary.svg';
import birthdayIcon from '../../assets/images/birthdays.svg';
import booksIcon from '../../assets/images/movies.svg';
import motivationIcon from '../../assets/images/motivation.svg';

function AppPage() {
  const buttons = [
    { id: 'tasks', title: 'Мои задачи', icon: tasksIcon },
    { id: 'diary', title: 'Дневник', icon: diaryIcon },
    { id: 'birthdays', title: 'Дни рождения', icon: birthdayIcon },
    { id: 'books', title: 'Мои книги и фильмы', icon: booksIcon },
    { id: 'motivation', title: 'Мотивашки', icon: motivationIcon },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.greeting}>
          <h2>Привет, ИМЯ!</h2>
          <span>Давай сделаем этот день продуктивным!</span>
        </div>
        <DateTime />
      </div>
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <button key={button.id}>
            <img className={styles.icon} src={button.icon} alt="" />
            <span>{button.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppPage;
