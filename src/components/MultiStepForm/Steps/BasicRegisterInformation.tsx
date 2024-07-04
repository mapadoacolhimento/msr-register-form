import * as Yup from "yup";

import Step from "../Step";
import TextInput from "../../TextInput";
import { sleep } from "../../../utils";

const basicRegisterInformationSchema = Yup.object({
	name: Yup.string().required("Esse campo é obrigatório."),
	email: Yup.string()
		.email("Insira um e-mail válido.")
		.required("Esse campo é obrigatório."),
	confirmEmail: Yup.string()
		.oneOf([Yup.ref("email")], "Os e-mails precisam ser iguais.")
		.required("Esse campo é obrigatório."),
	whatsapp: Yup.string()
		.matches(
			/^\(\d{2}\)\s\d{4,5}-\d{4}$/,
			"Insira um número de telefone válido com DDD."
		)
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
				name="whatsapp"
				type="whatsapp"
				label="Whatsapp"
				placeholder="Qual o seu whatsapp (com DDD)?"
				mask="(99) 99999-9999"
			/>
		</Step>
	);
}
