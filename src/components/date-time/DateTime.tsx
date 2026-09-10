import { useEffect, useState } from 'react';
import styles from './date-time.module.css';
import clockIcon from '../../assets/images/clock.svg';

const getCurrentDate = () => new Date();

export function DateTime() {
  const [currentDate, setCurrentDate] = useState(getCurrentDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(currentDate);

  const time = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(currentDate);

  return (
    <div className={styles.wrapper}>
      <img src={clockIcon} alt="" />
      <div>
        {date.charAt(0).toUpperCase() + date.slice(1)} · {time}
      </div>
    </div>
  );
}
