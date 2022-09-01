import "styles/layout/_container.scss";
import styles from "./Main.module.scss";

interface Props {
  children: React.ReactNode;
}

export function Main({ children }: Props) {
  return (
    <div className="l-container">
      <main className={styles.main}>{children}</main>
    </div>
  );
}
