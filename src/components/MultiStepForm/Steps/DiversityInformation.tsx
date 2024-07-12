import * as Yup from "yup";

import Step from "../Step";
import { sleep } from "../../../lib";
import SelectInput from "../../SelectInput";
import { colorOptions, disabilityOptions } from "../../../lib/constants";

const diversityInformationSchema = Yup.object({
	color: Yup.string().required("Esse campo é obrigatório."),
	hasDisability: Yup.string().required("Esse campo é obrigatório."),
});

export default function DiversityInformation() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step2 onSubmit"))}
			validationSchema={diversityInformationSchema}
			title={"Seus dados"}
			img={{
				src: "/illustrations/woman-floating.webp",
				alt: "Ilustração com uma mulher flutuando.",
			}}
		>
			<SelectInput
				name="color"
				label="Cor"
				options={colorOptions}
				placeholder="Cor"
			/>
			<SelectInput
				name="hasDisability"
				label="Pessoa com deficiência"
				options={disabilityOptions}
				placeholder="Você é uma pessoa com deficiência (PcD)?"
			/>
		</Step>
	);
}
