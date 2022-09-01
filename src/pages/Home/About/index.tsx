import classNames from "classnames";
import styles from "./About.module.scss";

export function About() {
  const urls = {
    github: "https://github.com/ygorfsguilherme",
    linkedin: "https://linkedin.com/in/ygorfsguilherme/",
    instagram: "https://www.instagram.com/ygorfsguilherme/",
  };

  return (
    <section className={styles["l-about__area"]} id="about">
      <div className={styles["c-about__me"]}>
        <h2>Óla</h2>

        <p>
          Sou, Ygor Guilherme entusiasta e estudante de desenvolvimento para
          web, participei do programa ONE - Oracle Next Education da Oracle +
          ALura. Gosto de resolver problemas e sou fascinado por tecnologia, ela
          me ajuda a criar soluções que melhor se adpatar aos meus problemas.
        </p>

        <a
          className={styles["c-button"]}
          href="https://drive.google.com/file/d/1p7rflvDvYIxdgRCohd1PsSXTSssef6FC/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Ver Curriculo
        </a>
      </div>

      <div className={styles["l-perfil__area"]}>
        <div className={styles["l-perfil__image"]}></div>

        <div className={styles["l-social__media"]}>
          <a
            className={classNames(
              styles["c-social__media"],
              styles["c-social__media--linkedin"]
            )}
            href={urls.linkedin}
            rel="noreferrer"
          >
            {}
          </a>
          <a
            className={classNames(
              styles["c-social__media"],
              styles["c-social__media--github"]
            )}
            href={urls.github}
            target="_blank"
            rel="noreferrer"
          >
            {}
          </a>
          <a
            className={classNames(
              styles["c-social__media"],
              styles["c-social__media--instagram"]
            )}
            href={urls.instagram}
            target="_blank"
            rel="noreferrer"
          >
            {}
          </a>
        </div>
      </div>
    </section>
  );
}
