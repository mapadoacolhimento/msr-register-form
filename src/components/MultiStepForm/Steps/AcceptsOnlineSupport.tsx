import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../lib";

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
			subtitle={"Você aceitaria ser atendida online?"}
			img={{
				src: "/illustrations/woman-getting-support.webp",
				alt: "Ilustração com duas mulheres sentadas conversando",
			}}
		>
			<fieldset name="acceptsOnlineSupport">
				<label htmlFor="sim">
					<Field
						type="radio"
						name="acceptsOnlineSupport"
						value="sim"
						id="sim"
						innerRef={(el: HTMLElement) => el?.focus()}
						tabIndex={0}
					/>
					Sim, aceito ser atendida online
				</label>
				<label htmlFor="nao">
					<Field
						type="radio"
						name="acceptsOnlineSupport"
						value="nao"
						id="nao"
						tabIndex={0}
					/>
					Não, só posso receber atendimento presencial
				</label>
			</fieldset>
			<ErrorMessage name="acceptsOnlineSupport" />
		</Step>
	);
}
