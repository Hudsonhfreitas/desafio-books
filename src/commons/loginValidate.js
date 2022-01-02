import * as Yup from "yup";

const loginValidate = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("informe seu e-mail"),
  password: Yup.string().required("Informe sua senha"),
});

export default loginValidate;