import * as Yup from "yup";

import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, acceptsOnlineSupportOptions } from "../../../lib";
import { Strong } from "@radix-ui/themes";

const acceptsOnlineSupportSchema = Yup.object({
	acceptsOnlineSupport: Yup.string()
		.oneOf(acceptsOnlineSupportOptions.map((a) => a.value))
		.required("Esse campo é obrigatório."),
});

export default function AcceptsOnlineSupport() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step2 onSubmit"))}
			validationSchema={acceptsOnlineSupportSchema}
			title={"Sobre o acolhimento"}
			subtitle={
				<>
					Você aceitaria ser atendida <Strong>online</Strong>?
				</>
			}
			img={{
				src: "/illustrations/woman-getting-support.webp",
				alt: "Ilustração com duas mulheres sentadas conversando",
			}}
		>
			<RadioInput
				name="acceptsOnlineSupport"
				options={acceptsOnlineSupportOptions}
			/>
		</Step>
	);
}
