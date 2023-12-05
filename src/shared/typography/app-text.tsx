import styles from './app-text.module.css';

const sizeMap = {
  m: styles.m,
  sm: styles.sm,
  l: styles.l,
};

type TextProps = WithChildren & { size?: 'm' | 'sm' | 'l' };

export function AppText({ children, size = 'm' }: TextProps) {
  const sizeClass = sizeMap[size];
  return <span className={sizeClass}>{children}</span>;
}
