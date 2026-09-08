import styles from './not-found-page.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>404 — Страница не найдена</h2>
      <Link className={styles.link} to="/authorize">
        Вернуться на страницу авторизации
      </Link>
    </div>
  );
}

export default NotFoundPage;
