import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import img from "../../../assets/illustrations/woman-getting-support.png";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../utils";

const acceptsOnlineSupportSchema = Yup.object({
  acceptsOnlineSupport: Yup.string()
    .oneOf(["sim", "nao"])
    .required("Esse campo é obrigatório."),
});

export default function AcceptsOnlineSupport() {
  return (
    <Step
      onSubmit={() => sleep(300).then(() => console.log("Step2 onSubmit"))}
      validationSchema={acceptsOnlineSupportSchema}
      title={"Sobre o acolhimento"}
      subtitle={"Você aceitaria ser atendida online?"}
      img={{
        src: img,
        alt: "Ilustração com duas mulheres sentadas conversando",
      }}
    >
      <fieldset>
        <label htmlFor="sim">
          <Field
            type="radio"
            name="acceptsOnlineSupport"
            value="sim"
            id="sim"
          />
          Sim, aceito ser atendida online
        </label>
        <label htmlFor="nao">
          <Field
            type="radio"
            name="acceptsOnlineSupport"
            value="nao"
            id="nao"
          />
          Não, só posso receber atendimento presencial
        </label>
      </fieldset>
      <ErrorMessage name="acceptsOnlineSupport" />
    </Step>
  );
}
