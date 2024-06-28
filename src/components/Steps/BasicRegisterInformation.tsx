import { ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import WizardStep from "./";
import { sleep } from "../../utils";

const basicRegisterInformationSchema = Yup.object({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("Esse campo é obrigatório."),
});

export default function BasicRegisterInformation() {
  return (
    <WizardStep
      onSubmit={() => sleep(300).then(() => console.log("Step1 onSubmit"))}
      validationSchema={basicRegisterInformationSchema}
      title={"Seus dados"}
    >
      <label htmlFor="email">E-mail</label>
      <Field
        name="email"
        placeholder="Qual o seu melhor e-mail?"
        type="email"
      />
      <ErrorMessage name="email" />
    </WizardStep>
  );
}
