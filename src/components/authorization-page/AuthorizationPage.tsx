import styles from './authorization-page.module.css';
import { useNavigate } from 'react-router-dom';

function AuthorizationPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Авторизация</h3>
      <div className={styles.authorization}>
        <form className={styles.form}>
          <div className={styles.input}>
            <label htmlFor="name">Введи свое имя</label>
            <input id="name" />
          </div>
        </form>
      </div>
      <button className={styles.button} onClick={() => navigate('/todo')}>
        Запланировать
      </button>
    </div>
  );
}

export default AuthorizationPage;
