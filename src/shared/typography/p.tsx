import { HTMLAttributes } from 'react';
import styles from './p.module.css';

type PProps = WithChildren<HTMLAttributes<HTMLParagraphElement>>;

export function P({ children, ...props }: PProps) {
  return (
    <p className={styles.root} {...props}>
      {children}
    </p>
  );
}
