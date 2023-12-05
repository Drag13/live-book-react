import { AppText } from './shared/typography/app-text';
import styles from './nav.module.css';
import { AppLink } from './shared/component/app-link';

export function AppNav() {
  return (
    <nav className={styles.root}>
      <AppLink href="/">
        <AppText size='sm'>На головну</AppText>
      </AppLink>
    </nav>
  );
}
