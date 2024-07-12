import * as Yup from "yup";

import Step from "../Step";
import CheckboxInput from "../../CheckboxInput";
import { sleep } from "../../../lib";
import { supportTypeOptions } from "../../../lib/constants";

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
			img={{
				src: "/illustrations/woman-getting-support.webp",
				alt: "Ilustração com duas mulheres sentadas conversando",
			}}
		>
			<CheckboxInput
				name={"supportType"}
				options={supportTypeOptions}
				question={"Que tipo de acolhimento você precisa?"}
			/>
		</Step>
	);
}
