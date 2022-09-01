import styles from "./Copyright.module.scss";

export function Copyright() {
  return (
    <section className={styles["l-copyright"]}>
      <p>© 2022 - Direitos reservados.</p>

      <p>
        {'Desenvolvido por: '}
        <a className={styles["c-developer"]} href="/">
          Ygor Guilherme
        </a>
      </p>
    </section>
  );
}
