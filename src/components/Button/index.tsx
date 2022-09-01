import styles from "./Button.module.scss";

interface Props {
    children: React.ReactNode
}

export function Button({children}: Props) {
  return (
    <button className={styles["c-button"]} type="submit">
      {children}
    </button>
  );
}
