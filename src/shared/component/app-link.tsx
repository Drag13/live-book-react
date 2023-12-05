import { AnchorHTMLAttributes } from 'react';
import styles from './app-link.module.css'

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function AppLink({ children, ...props }: AppLinkProps) {
  return <a className={styles.a} {...props}>{children}</a>;
}
