import * as React from "react";
import * as Yup from "yup";
import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, genderViolenceOptions } from "../../../lib";

const genderViolenceSchema = Yup.object({
	genderViolence: Yup.string()
		.oneOf(["yes", "no"])
		.required("Esse campo é obrigatório."),
});

export default function GenderViolence() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step6 onSubmit"))}
			validationSchema={genderViolenceSchema}
			title={"Sobre a violência"}
			img={{
				src: "/illustrations/woman-covering-ears.webp",
				alt: "Ilustração de uma mulher de cabeça baixa tampando os ouvidos",
			}}
		>
			<RadioInput
				name="genderViolence"
				options={genderViolenceOptions}
				question={"Você sofreu ou está sofrendo violência de gênero?"}
			/>
		</Step>
	);
}
