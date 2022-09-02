import styles from "./FormContact.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { Input } from "./Input";
import { IFormInputs } from "interfaces/IFormInputs";
import axios from "axios";
import { Alert } from "../../Alert";
import { TitleSection } from "components/TitleSection";
import { messageError, setMessageError } from "state/hook/messageError";
import { schema } from "./schemas/Resgister";

export function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema()),
  });

  const message = messageError();
  const setMessage = setMessageError();

  function onSubmit(data: any) {
    const url =
      "https://pyformail.herokuapp.com/form?mail=ygorfsguilherme@gmail.com";

    setMessage({
      errorState: "warning",
      errorMessage: "Enviando ...",
    });

    axios
      .post(url, data)
      .then((reponse) => {
        if (reponse.status === 200) {
          setMessage({
            errorState: "sucess",
            errorMessage: "Mensagem enviada",
          });
        }
      })
      .catch((err) => {
        setMessage({
          errorState: "danger",
          errorMessage: "Mensagem não enviada",
        });
      });
  }

  return (
    <section className={styles["l-contact__area"]} id="contact">
      <TitleSection>Contato</TitleSection>

      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <Input
          errors={errors}
          register={register}
          type={"text"}
          typeRegister={"nome"}
          id={"nome"}
          label={"Nome"}
        />

        <Input
          errors={errors}
          register={register}
          type={"text"}
          typeRegister={"assunto"}
          id={"asssunto"}
          label={"Assunto"}
        />

        <Input
          errors={errors}
          register={register}
          type={"text"}
          typeRegister={"email"}
          id={"email"}
          label={"E-mail"}
        />

        <Input
          errors={errors}
          register={register}
          type={"textarea"}
          typeRegister={"mensagem"}
          id={"mensagem"}
          label={"Mensagem"}
        />

        {message.errorState === "sleep" ? (
          ""
        ) : (
          <Alert variant={message.errorState} mensagem={message.errorMessage} />
        )}

        <Button>Enviar mensagem</Button>
      </form>
    </section>
  );
}
