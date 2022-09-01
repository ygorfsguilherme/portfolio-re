import { object, string } from 'yup';

export const schema = () => {
  return object({
    nome: string().min(3, "Nome precisa ter no minimo 3 letras").required(),
    assunto: string().required("Compo obrigatorio"),
    email: string()
      .email("O e-mail precisa ser valido")
      .required("Compo email é obrigatório"),
    mensagem: string().required("Compo mensagem é obrigatório"),
  });
};
