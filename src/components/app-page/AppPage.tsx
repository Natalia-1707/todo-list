import styles from './app-page.module.css';
import { DateTime } from '../date-time/DateTime';
import { useState } from 'react';
import tasksIcon from '../../assets/images/tasks.svg';
import diaryIcon from '../../assets/images/diary.svg';
import birthdayIcon from '../../assets/images/birthdays.svg';
import booksIcon from '../../assets/images/movies.svg';
import motivationIcon from '../../assets/images/motivation.svg';
import { Modal } from '../modal/Modal';
import { Tasks } from '../tasks/Tasks';

function AppPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  console.log('activeModal:', activeModal);

  const buttons = [
    { id: 'tasks', title: 'Мои задачи', icon: tasksIcon, color: 'var(--color-tasks-border)' },
    { id: 'diary', title: 'Дневник', icon: diaryIcon, color: 'var(--color-diary-border)' },
    {
      id: 'birthdays',
      title: 'Дни рождения',
      icon: birthdayIcon,
      color: 'var(--color-birthday-border)',
    },
    {
      id: 'books',
      title: 'Мои книги и фильмы',
      icon: booksIcon,
      color: 'var(--color-books-border)',
    },
    {
      id: 'motivation',
      title: 'Мотивашки',
      icon: motivationIcon,
      color: 'var(--color-motivation-border)',
    },
  ];

  const currentButton = buttons.find((button) => button.id === activeModal);

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
          <button
            key={button.id}
            onClick={() => {
              setActiveModal(button.id);
            }}
          >
            <img className={styles.icon} src={button.icon} alt="" />
            <span>{button.title}</span>
          </button>
        ))}
      </div>

      {currentButton && (
        <Modal onClose={() => setActiveModal(null)} accentColor={currentButton.color}>
          {activeModal === 'tasks' && <Tasks />}
        </Modal>
      )}
    </div>
  );
}

export default AppPage;
