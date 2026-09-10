import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  accentColor: string;
}

export function Modal({ title, children, onClose, accentColor }: ModalProps) {
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button
          className={`${styles.close} material-symbols-outlined`}
          onClick={onClose}
          aria-label="Закрыть"
          style={{ '--accent-color': accentColor } as React.CSSProperties}
        >
          close
        </button>
        <h3>{title}</h3>
        {children}
      </div>
    </div>,
    document.body,
  );
}
