/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from "classnames";
import { IProjects } from "interfaces/IProjects";
import styles from "./CardProject.module.scss";

interface Props extends IProjects {
}

export function CardProject({ projects }: Props) {

  return (
    <section className={styles["project__area"]}>
      <article className={styles["projects__container"]}>
        {projects.map((project, key) => (
          <div className={styles["card__project"]} key={key}>
            <img
              className={styles["card__project__image"]}
              src={project.image}
              alt=""
            />

            <div className={styles["card__project__button"]}>
              <a
                className={classNames(
                  styles["card__project__link"],
                  styles["card__project__link--view"]
                )}
                target="_blank"
                href={project.view_app}
                rel="noreferrer"
              ></a>
              <a
                className={classNames(
                  styles["card__project__link"],
                  styles["card__project__link--code"]
                )}
                target="_blank"
                href={project.github_link}
                rel="noreferrer"
              ></a>
            </div>

            <div className={styles["card__project__body"]}>
              <span
                className={styles["card__project__show__description"]}
              ></span>
              <h3 className={styles["card__project__title"]}>
                {project.title}
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
