import { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './app-link.module.css';

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function AppLink({ children, href, ...props }: AppLinkProps) {
  return (
    <Link to={href} className={styles.a} {...props}>
      {children}
    </Link>
  );
}
