import "styles/layout/_container.scss";
import { Contact } from "./Contact";
import { Copyright } from "./Copyright";

export function Footer() {
  return (
    <footer className="l-container">
      <Contact />

      <Copyright />
    </footer>
  );
}
