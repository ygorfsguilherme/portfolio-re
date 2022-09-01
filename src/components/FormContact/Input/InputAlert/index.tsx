import styles from './InputAlert.module.scss'
import { IFormInputs } from "interfaces/IFormInputs";
import { FieldErrorsImpl } from "react-hook-form";

interface Props {
  errors: FieldErrorsImpl<IFormInputs>;
  typeRegister: "nome" | "mensagem" | "assunto" | "email";
}

export function InputAlert({ errors, typeRegister }: Props) {
  return <span className={styles.input__alert}>{errors[typeRegister]?.message}</span>;
}
