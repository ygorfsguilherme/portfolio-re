import { TitleSection } from "components/TitleSection";
import styles from "./FollowMe.module.scss";
import urls from "data/socialMedia.json";

export function FollowMe() {
  return (
    <section className={styles["l-social__area"]}>
      <TitleSection>Siga-me</TitleSection>

      <ul className={styles["c-social__list"]}>
        <li className={styles["c-social__item"]}>
          <a
            className={styles["c-social__link"]}
            href={urls.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            className={styles["c-social__link"]}
            href={urls.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className={styles["c-social__link"]}
            href={urls.discord}
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </li>
      </ul>
    </section>
  );
}
