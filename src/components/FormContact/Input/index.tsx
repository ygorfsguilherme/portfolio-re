import classNames from "classnames";
import { IInputFild } from "interfaces/IInputFild";
import styles from "./Input.module.scss";
import { InputAlert } from "./InputAlert";

interface Props extends IInputFild {}

export function Input({
  errors,
  register,
  id,
  type,
  typeRegister,
  label,
}: Props) {
  const err = errors[typeRegister] ? styles["alert__danger"] : "";
  return (
    <div className={styles["c-input__container"]}>
      {type === "textarea" ? (
        <textarea
          className={classNames(styles["c-textarea"], err)}
          id={id}
          placeholder=" "
          {...register(typeRegister)}
        />
      ) : (
        <input
          className={classNames(styles["c-input"], err)}
          type={type}
          id={id}
          placeholder=" "
          {...register(typeRegister)}
        />
      )}

      <label className={styles["c-input__label"]} htmlFor={id}>
        {label}
      </label>

      <InputAlert typeRegister={typeRegister} errors={errors} />
    </div>
  );
}
