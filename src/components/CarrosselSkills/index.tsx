import styles from "./CarrosselSkills.module.scss";
import { TitleSection } from "components/TitleSection";
import skills from "data/skills.json";
import { useState } from "react";

export function CarrosselSkills() {
  const [move, setMove] = useState(0);

  setTimeout(() => {
    if (move > -(75 * (skills.length - 4))) {
      setMove(move - 75 );
    } else setMove(0);
  }, 3400);


  return (
    <section>
      <TitleSection> Skills </TitleSection>

      <div className={styles["l-carrossel"]}>
        <div
          className={styles["l-carrossel__container"]}
          style={{ transform: `translateX(${move}px)` }}
        >
          {skills.map((skill, key) => (
            <img key={key}
              className={styles["c-card__icon"]}
              src={skill.image}
              alt=""
              height="64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
