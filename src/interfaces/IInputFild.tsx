import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { IFormInputs } from "./IFormInputs";

export interface IInputFild {
    errors: FieldErrorsImpl<IFormInputs>;
    register: UseFormRegister<IFormInputs>;
    id?: string;
    type?: string;
    typeRegister: "nome" | "mensagem" | "assunto" | "email";
    label?: React.ReactNode;
  }