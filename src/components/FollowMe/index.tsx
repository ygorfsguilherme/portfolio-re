import { TitleSection } from "components/TitleSection";
import styles from "./FollowMe.module.scss";

export function FollowMe() {
  return (
    <section className={styles["l-social__area"]}>
      <TitleSection>Siga-me</TitleSection>

      <ul className={styles["c-social__list"]}>
        <li className={styles["c-social__item"]}>
          <a
            className={styles["c-social__link"]}
            href="https://linkedin.com/in/ygorfsguilherme/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            className={styles["c-social__link"]}
            href="https://github.com/ygorfsguilherme"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className={styles["c-social__link"]}
            href="https://www.instagram.com/ygorfsguilherme/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </section>
  );
}
