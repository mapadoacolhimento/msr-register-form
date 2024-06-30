import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import img from "../../../assets/illustrations/woman-getting-support.png";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../utils";

const supportTypeSchema = Yup.object({
  supportType: Yup.array()
    .of(Yup.string().oneOf(["psychological", "legal"]))
    .min(1, "Esse campo é obrigatório."),
});

export default function SupportType() {
  return (
    <Step
      onSubmit={() => sleep(300).then(() => console.log("Step3 onSubmit"))}
      validationSchema={supportTypeSchema}
      title={"Sobre o acolhimento"}
      subtitle={"Que tipo de acolhimento você precisa?"}
      img={{
        src: img,
        alt: "Ilustração com duas mulheres sentadas conversando",
      }}
    >
      <fieldset>
        <label htmlFor="psicologico">
          <Field
            type="checkbox"
            name="supportType"
            value="psychological"
            id="psicologico"
          />
          Acolhimento psicológico
        </label>
        <label htmlFor="juridico">
          <Field
            type="checkbox"
            name="supportType"
            value="legal"
            id="juridico"
          />
          Acolhimento jurídico
        </label>
        <ErrorMessage name="supportType" />
      </fieldset>
    </Step>
  );
}
