import "styles/layout/_container.scss";
import styles from "./Home.module.scss";
import { Main } from "components/Main";
import { About } from "./About";
import { CardProject } from "components/CardProject";
import projects from "data/projects.json";
import { CarrosselHobbies } from "components/CarrosselHobbies";
import { CarrosselSkills } from "components/CarrosselSkills";
import { TitleSection } from "components/TitleSection";
import { Link } from "react-router-dom";

export default function Home() {
  let project = [];

  for (let i = 0; i < 3; i++) {
    project.push(projects[i]);
  }

  return (
    <Main>
      <About />

      <section className={styles["about"]}>
        <div className={styles["about__skills"]}>
          <CarrosselHobbies />
          <CarrosselSkills />
        </div>

        <cite>
          "Qualquer um pode escrever um código que o computador entenda. Bons
          programadores escrevem códigos que os humanos entendam." - Martin
          Fowler
        </cite>
      </section>

      <div className={styles.projects__section} id="projects">
        <TitleSection>Projetos</TitleSection>

        <Link className={styles.projects__link} to="/projects">
          Mais
        </Link>
      </div>

      <CardProject projects={project} />
    </Main>
  );
}
