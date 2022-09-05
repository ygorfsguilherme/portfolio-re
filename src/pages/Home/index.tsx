import "styles/layout/_container.scss";
import { Main } from "components/Main";
import { About } from "./About";
import { CardProject } from "components/CardProject";

export default function Home() {
  return (
    <Main>
      <About />
      <CardProject />
    </Main>
  );
}
