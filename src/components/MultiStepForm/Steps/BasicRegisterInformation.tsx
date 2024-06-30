import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import img from "../../../assets/illustrations/woman-floating.png";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../utils";

const basicRegisterInformationSchema = Yup.object({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("Esse campo é obrigatório."),
});

export default function BasicRegisterInformation() {
  return (
    <Step
      onSubmit={() => sleep(300).then(() => console.log("Step1 onSubmit"))}
      validationSchema={basicRegisterInformationSchema}
      title={"Seus dados"}
      img={img}
    >
      <label htmlFor="email">E-mail</label>
      <Field
        name="email"
        placeholder="Qual o seu melhor e-mail?"
        type="email"
        id={"email"}
      />
      <ErrorMessage name="email" />
    </Step>
  );
}
