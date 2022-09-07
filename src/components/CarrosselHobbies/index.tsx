import styles from "./CarrosselHobbies.module.scss";
import { TitleSection } from "components/TitleSection";
import hobbies from "data/hobbies.json";
import { useState } from "react";

export function CarrosselHobbies() {
  const [move, setMove] = useState(0);

  setTimeout(() => {
    if (move > -(300 * (hobbies.length - 1))) {
      setMove(move - 300);
    } else setMove(0);
  }, 4000);

  return (
    <section>
      <TitleSection> Hobbies </TitleSection>

      <div className={styles["l-carrossel"]}>
        <div
          className={styles["l-carrossel__container"]}
          style={{ transform: `translateX(${move}px)` }}
        >
          {hobbies.map((hobbie, key) => (
            <div className={styles["l-card__hobbies"]} key={key}>
              <div className="c-hobbies__card__icon icon">
                <img src={hobbie.image} alt="" height="64" />
              </div>
              <p className="c-hobbies__card__text">{hobbie.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
