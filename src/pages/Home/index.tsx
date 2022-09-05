import "styles/layout/_container.scss";
import { Main } from "components/Main";
import { About } from "./About";
import { CardProject } from "components/CardProject";
import projects from "data/projects.json";

export default function Home() {
  let project = [];

  for (let i = 0; i < 3; i++) {
    project.push(projects[i]);
  }

  return (
    <Main>
      <About />
      <CardProject projects={project} />
    </Main>
  );
}
