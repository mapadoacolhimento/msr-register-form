import { ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import WizardStep from ".";
import { sleep } from "../../../utils";

const acceptsOnlineSupportSchema = Yup.object({
  acceptsOnlineSupport: Yup.string()
    .oneOf(["yes", "no"])
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
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="acceptsOnlineSupport" value="yes" />
          Sim, aceito ser atendida online
        </label>
        <label>
          <Field type="radio" name="acceptsOnlineSupport" value="no" />
          Não, só posso receber atendimento presencial
        </label>
      </div>
      <ErrorMessage name="acceptsOnlineSupport" />
    </WizardStep>
  );
}
