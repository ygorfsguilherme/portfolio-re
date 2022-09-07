import "styles/layout/_container.scss";
import { Contact } from "components/Contact";
import { Copyright } from "components/Copyright";

export function Footer() {
  return (
    <footer className="l-container" id="contact">
      <Contact />

      <Copyright />
    </footer>
  );
}
