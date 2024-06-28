import { Field } from "formik";
import * as Yup from "yup";

import WizardStep from ".";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../utils";

const acceptsOnlineSupportSchema = Yup.object({
  acceptsOnlineSupport: Yup.string()
    .oneOf(["sim", "nao"])
    .required("Esse campo é obrigatório."),
});

export default function AcceptsOnlineSupport() {
  return (
    <WizardStep
      onSubmit={() => sleep(300).then(() => console.log("Step2 onSubmit"))}
      validationSchema={acceptsOnlineSupportSchema}
      title={"Sobre o acolhimento"}
      subtitle={"Você aceitaria ser atendida online?"}
    >
      <fieldset role="radiogroup">
        <label htmlFor="sim">
          <Field
            type="radio"
            name="acceptsOnlineSupport"
            value="sim"
            tabIndex="0"
            id="sim"
          />
          Sim, aceito ser atendida online
        </label>
        <label htmlFor="nao">
          <Field
            type="radio"
            name="acceptsOnlineSupport"
            value="nao"
            tabIndex="1"
            id="nao"
          />
          Não, só posso receber atendimento presencial
        </label>
      </fieldset>
      <ErrorMessage name="acceptsOnlineSupport" />
    </WizardStep>
  );
}
