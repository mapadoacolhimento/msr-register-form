import * as Yup from "yup";

import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, disabilityOptions } from "../../../lib";
import { Strong } from "@radix-ui/themes";

const disabilityInformationSchema = Yup.object({
	hasDisability: Yup.string()
		.oneOf(disabilityOptions.map((a) => a.value))
		.required("Esse campo é obrigatório."),
});

export default function DisabilityInformation() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
			validationSchema={disabilityInformationSchema}
			title={"Seus dados"}
			img={{
				src: "/illustrations/woman-floating.svg",
				alt: "Ilustração com uma mulher flutuando.",
			}}
		>
			<RadioInput
				name="hasDisability"
				options={disabilityOptions}
				question={
					<>
						Você é <Strong>PcD </Strong>(Pessoa com deficiência)?
					</>
				}
			/>
		</Step>
	);
}
