import * as Yup from "yup";
import Step from "../Step";
import { sleep, externalSupportOptions } from "../../../lib";
import RadioInput from "../../RadioInput";
import { Strong } from "@radix-ui/themes";

const externalSupportSchema = Yup.object({
	externalSupport: Yup.string()
		.oneOf(externalSupportOptions.map((a) => a.value))
		.required("Esse campo é obrigatório."),
});

export default function ExternalSupport() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
			validationSchema={externalSupportSchema}
			title={"Sobre a violência"}
			img={{
				src: "/illustrations/woman-covering-ears.svg",
				alt: "Ilustração de uma mulher de cabeça baixa tampando os ouvidos",
			}}
		>
			<RadioInput
				name={"externalSupport"}
				options={externalSupportOptions}
				question={
					<>
						Você está recebendo acompanhamento jurídico pela{" "}
						<Strong>defensoria pública</Strong>?
					</>
				}
			/>
		</Step>
	);
}
