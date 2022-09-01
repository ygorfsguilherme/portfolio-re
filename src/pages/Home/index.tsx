import "styles/layout/_container.scss";
import { Main } from "components/Main";
import { About } from "./About";
import { Footer } from "components/Footer";

export default function Home() {
  return (
    <Main>
      <About />
      <Footer />
    </Main>
  );
}
