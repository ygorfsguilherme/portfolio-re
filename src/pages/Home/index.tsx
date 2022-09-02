import "styles/layout/_container.scss";
import { Main } from "components/Main";
import { About } from "./About";

export default function Home() {
  return (
    <Main>
      <About />
    </Main>
  );
}
