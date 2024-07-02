import { Field } from "formik";
import * as Yup from "yup";

import Step from "../Step";
import ErrorMessage from "../../ErrorMessage";
import { sleep } from "../../../utils";
import { Values } from "..";

const basicRegisterInformationSchema = Yup.object({
	email: Yup.string()
		.email("Insira um e-mail válido.")
		.required("Esse campo é obrigatório."),
});

export default function BasicRegisterInformation() {
	async function handleSubmit(values: Pick<Values, "email">) {
		const response = await fetch("/validate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: values.email,
			}),
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const data = await response.json();
		const isValidSupportRequest = data.res === "test@gmail.com";
		console.log({ isValidSupportRequest, data });
	}

	return (
		<Step
			onSubmit={handleSubmit}
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
