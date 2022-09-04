import "styles/layout/_container.scss";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <div className="l-container">
      <nav className={styles["l-navbar"]}>
        <a href="/" className={styles["c-navbar__logo"]}>
          YG
        </a>

        <ul className={styles["c-navbar__list"]}>
          <li className={styles["c-navbar__item"]}>
            <a className={styles["c-navbar__link"]} href="#about">
              Sobre
            </a>
          </li>

          <li className={styles["c-navbar__item"]}>
            <a className={styles["c-navbar__link"]} href="#skills">
              Skills
            </a>
          </li>

          <li className={styles["c-navbar__item"]}>
            <a
              className={styles["c-navbar__link"]}
              href="https://cursos.alura.com.br/emprega-one/profile/ygorfsguilherme"
            >
              Perfil ONE
            </a>
          </li>

          <li className={styles["c-navbar__item"]}>
            <a className={styles["c-navbar__link"]} href="/project">
              Projetos
            </a>
          </li>

          <li className={styles["c-navbar__item"]}>
            <a className={styles["c-navbar__link"]} href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
