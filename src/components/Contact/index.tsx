import styles from "./Contact.module.scss";
import { FormContact } from "components/Contact/FormContact";
import { FollowMe } from "components/Contact/FollowMe";

export function Contact() {
  return (
    <div className={styles["l-contact__container"]}>
      <FollowMe/>

      <FormContact/>
    </div>
  );
}
