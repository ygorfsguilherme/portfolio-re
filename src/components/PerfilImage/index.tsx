import styles from "./PerfilImage.module.scss";
import t1 from "assets/perfil/t1.png";
import t2 from "assets/perfil/t2.png";
import t3 from "assets/perfil/t3.png";
import t4 from "assets/perfil/t4.png";
import t5 from "assets/perfil/t5.png";

export function PerfilImage() {
  return (
    <div className={styles["l-perfil__image"]}>
      <img className={styles["move-1"]} src={t1} alt="" />
      <img className={styles["move-2"]} src={t2} alt="" />
      <img className={styles["move-3"]} src={t3} alt="" />
      <img className={styles["move-4"]} src={t4} alt="" />
      <img className={styles["move-5"]} src={t5} alt="" />
    </div>
  );
}
