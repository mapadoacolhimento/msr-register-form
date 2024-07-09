import * as Yup from "yup";

import Step from "../Step";
import TextInput from "../../TextInput";

const basicRegisterInformationSchema = Yup.object({
	name: Yup.string().required("Esse campo é obrigatório."),
	email: Yup.string()
		.email("Insira um e-mail válido.")
		.required("Esse campo é obrigatório."),
	confirmEmail: Yup.string()
		.oneOf([Yup.ref("email")], "Os e-mails precisam ser iguais.")
		.required("Esse campo é obrigatório."),
	phone: Yup.string()
		.matches(
			/^\(\d{2}\)\s\d{4,5}-\d{4}$/,
			"Insira um número de telefone válido com DDD."
		)
		.required("Esse campo é obrigatório."),
	dateOfBirth: Yup.string().required("Esse campo é obrigatório."),
});

export default function BasicRegisterInformation() {
	async function handleSubmit(
		values: Yup.InferType<typeof basicRegisterInformationSchema>
	) {
		const response = await fetch("/validate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone: values.phone,
				email: values.email,
			}),
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const data = await response.json();
		return data;
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
			<TextInput
				name="name"
				label="Nome"
				placeholder="Qual o seu primeiro nome?"
			/>
			<TextInput
				name="email"
				type="email"
				label="E-mail"
				placeholder="Qual o seu melhor e-mail?"
			/>
			<TextInput
				name="confirmEmail"
				type="email"
				label="Confirme seu E-mail"
				placeholder="Confirme seu e-mail"
			/>
			<TextInput
				name="phone"
				type="phone"
				label="Whatsapp"
				placeholder="Qual o seu whatsapp (com DDD)?"
				mask="(99) 99999-9999"
			/>
			<TextInput
				name="dateOfBirth"
				type="text"
				label="Data de Nascimento"
				placeholder="DD/MM/AAAA"
				mask="99/99/9999"
			/>
		</Step>
	);
}
