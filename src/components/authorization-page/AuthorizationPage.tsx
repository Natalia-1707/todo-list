import styles from './authorization-page.module.css';

function AuthorizationPage() {
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
      <button className={styles.button}>Запланировать</button>
    </div>
  );
}

export default AuthorizationPage;
