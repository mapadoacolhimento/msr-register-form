import * as Yup from "yup";

import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep } from "../../../utils";
import TextInput from "@/components/TextInput";

const acceptsOnlineSupportSchema = Yup.object({
	acceptsOnlineSupport: Yup.string()
		.oneOf(["sim", "nao"])
		.required("Esse campo é obrigatório."),
});

export default function AcceptsOnlineSupport() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step2 onSubmit"))}
			validationSchema={acceptsOnlineSupportSchema}
			title={"Sobre o acolhimento"}
			img={{
				src: "/illustrations/woman-getting-support.webp",
				alt: "Ilustração com duas mulheres sentadas conversando",
			}}
		>
			<RadioInput
				name="acceptsOnlineSupport"
				options={[
					{ value: "sim", name: "Sim, aceito ser atendida online" },
					{
						value: "nao",
						name: "Não, só posso receber atendimento presencial",
					},
				]}
				question={"Você aceitaria ser atendida online?"}
			/>
		</Step>
	);
}
