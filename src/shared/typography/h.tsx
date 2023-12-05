import { HTMLAttributes } from 'react';
import styles from './h.module.css';
type PProps = WithChildren<HTMLAttributes<HTMLHeadingElement>>;

export const H = ({ children, ...props }: PProps) => (
  <h1 className={styles.root} {...props}>
    {children}
  </h1>
);
