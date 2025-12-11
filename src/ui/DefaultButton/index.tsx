import styles from './styles.module.css';

type DefaultButtonProps = {
    children: React.ReactNode;
}& React.ComponentProps<'button'>;

export const DefaultButton = ({ children, ...buttonProps }: DefaultButtonProps) => {
  return (
    <button className={styles.button} {...buttonProps}>
        {children}
    </button>
  )
}
