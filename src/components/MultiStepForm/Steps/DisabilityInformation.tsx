import * as Yup from "yup";

import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, disabilityOptions } from "../../../lib";

const disabilityInformationSchema = Yup.object({
	hasDisability: Yup.string()
		.oneOf(["yes", "no"])
		.required("Esse campo é obrigatório."),
});

export default function DisabilityInformation() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
			validationSchema={disabilityInformationSchema}
			title={"Seus dados"}
			img={{
				src: "/illustrations/woman-floating.webp",
				alt: "Ilustração com uma mulher flutuando.",
			}}
		>
			<RadioInput
				name="hasDisability"
				options={disabilityOptions}
				question={"Você é PcD (Pessoa com deficiência)?"}
			/>
		</Step>
	);
}