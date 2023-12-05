import styles from './app-list.module.css';

export function Ul({ children }: WithChildren) {
  return <ul className={styles.ul}>{children}</ul>;
}

export function Li({ children }: WithChildren) {
  return <li className={styles.li}>{children}</li>;
}
