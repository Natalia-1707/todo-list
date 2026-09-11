import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  accentColor: string;
}

export function Modal({ children, onClose, accentColor }: ModalProps) {
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
        {children}
      </div>
    </div>,
    document.body,
  );
}
