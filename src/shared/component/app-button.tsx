import styles from './app-button.module.css';

type AppButtonProps = WithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;
export function AppButton({ children, ...props }: AppButtonProps) {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  );
}
