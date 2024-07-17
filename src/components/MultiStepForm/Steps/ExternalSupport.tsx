import * as React from "react";
import * as Yup from "yup";
import Step from "../Step";
import CheckboxInput from "../../CheckboxInput";
import { sleep, externalSupportOptions } from "../../../lib";

const externalSupportSchema = Yup.object({
	externalSupport: Yup.array()
		.of(Yup.string().oneOf(["no", "psychologist", "lawyer", "public-defender"]))
		.min(1, "Esse campo é obrigatório."),
});

export default function ExternalSupport() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
			validationSchema={externalSupportSchema}
			title={"Sobre a violência"}
			img={{
				src: "/illustrations/woman-covering-ears.webp",
				alt: "Ilustração de uma mulher de cabeça baixa tampando os ouvidos",
			}}
		>
			<CheckboxInput
				name={"externalSupport"}
				options={externalSupportOptions}
				question={
					<>
						Você está em atendimento psicológico e/ou jurídico{" "}
						<strong>fora do Mapa do Acolhimento</strong>?
					</>
				}
			/>
		</Step>
	);
}
