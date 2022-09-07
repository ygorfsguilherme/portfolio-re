import "styles/layout/_container.scss";
import styles from "./Projects.module.scss";
import { Main } from "components/Main";
import { CardProject } from "components/CardProject";
import projects from "data/projects.json";
import { TitleSection } from "components/TitleSection";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Main>
      <div className={styles.projects__section} id="projects">
        <TitleSection>Projetos</TitleSection>

        <Link className={styles.projects__link} to="/">
          Volta
        </Link>
      </div>
      <CardProject projects={projects} />
    </Main>
  );
}
