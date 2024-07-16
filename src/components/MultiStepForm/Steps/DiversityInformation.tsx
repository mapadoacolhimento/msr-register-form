import * as Yup from "yup";

import Step from "../Step";
import { sleep, colorOptions } from "../../../lib";
import SelectInput from "../../SelectInput";

const diversityInformationSchema = Yup.object({
	color: Yup.string().required("Esse campo é obrigatório."),
});

export default function DiversityInformation() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
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
		</Step>
	);
}
