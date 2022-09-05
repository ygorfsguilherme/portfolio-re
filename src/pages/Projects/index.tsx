import "styles/layout/_container.scss";
import { Main } from "components/Main";
import { CardProject } from "components/CardProject";
import projects from "data/projects.json";

export default function Projects() {
  return (
    <Main>
      <CardProject projects={projects} />
    </Main>
  );
}
