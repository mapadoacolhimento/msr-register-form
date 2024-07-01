import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../utils";

const basicRegisterInformationSchema = Yup.object({
	email: Yup.string()
		.email("Insira um e-mail válido.")
		.required("Esse campo é obrigatório."),
});

export default function BasicRegisterInformation() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step1 onSubmit"))}
			validationSchema={basicRegisterInformationSchema}
			title={"Seus dados"}
			img={{
				src: "/illustrations/woman-floating.webp",
				alt: "Ilustração com uma mulher flutuando.",
			}}
		>
			<label htmlFor="email">E-mail</label>
			<Field
				name="email"
				placeholder="Qual o seu melhor e-mail?"
				type="email"
				id={"email"}
				innerRef={(el: HTMLElement) => el?.focus()}
			/>
			<ErrorMessage name="email" />
		</Step>
	);
}
