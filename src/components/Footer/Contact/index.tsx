import { FormContact } from "components/FormContact";
import styles from "./Contact.module.scss";
import { FollowMe } from "../../FollowMe";

export function Contact() {
  return (
    <div className={styles["l-contact__container"]}>
      <FollowMe/>

      <FormContact/>
    </div>
  );
}
