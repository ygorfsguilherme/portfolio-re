import styles from "./TitleSection.module.scss";

interface Props {
  children: React.ReactNode;
}

export function TitleSection({ children }: Props) {
  return <h2 className={styles.title__section}>{children}</h2>;
}
