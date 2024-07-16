import * as React from "react";
import * as Yup from "yup";
import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, violenceLocationOptions } from "../../../lib";

const violenceLocationSchema = Yup.object({
	violenceLocation: Yup.string()
		.oneOf(["yes", "no"])
		.required("Esse campo é obrigatório."),
});

export default function ViolenceLocation() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
			validationSchema={violenceLocationSchema}
			title={"Sobre a violência"}
			img={{
				src: "/illustrations/woman-covering-ears.webp",
				alt: "Ilustração de uma mulher de cabeça baixa tampando os ouvidos",
			}}
		>
			<RadioInput
				name="violenceLocation"
				options={violenceLocationOptions}
				question={
					<>
						A violência ocorreu <strong>no Brasil</strong>?
					</>
				}
			/>
		</Step>
	);
}
