import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../lib";

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
				src: "/illustrations/woman-getting-support.webp",
				alt: "Ilustração com duas mulheres sentadas conversando",
			}}
		>
			<fieldset name="supporType">
				<label htmlFor="psicologico">
					<Field
						type="checkbox"
						name="supportType"
						value="psychological"
						id="psicologico"
						innerRef={(el: HTMLElement) => el?.focus()}
						tabIndex={0}
					/>
					Acolhimento psicológico
				</label>
				<label htmlFor="juridico">
					<Field
						type="checkbox"
						name="supportType"
						value="legal"
						id="juridico"
						tabIndex={0}
					/>
					Acolhimento jurídico
				</label>
				<ErrorMessage name="supportType" />
			</fieldset>
		</Step>
	);
}
