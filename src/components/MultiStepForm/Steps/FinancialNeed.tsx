import * as React from "react";
import * as Yup from "yup";
import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, financialNeedOptions } from "../../../lib";
import dynamic from "next/dynamic";
const CheckboxInfo = dynamic(() => import("../../CheckboxInfo"), {
	ssr: false,
});

const financialNeedSchema = Yup.object({
	financialNeed: Yup.string()
		.oneOf(["yes", "no"])
		.required("Esse campo é obrigatório."),
	checkboxInfo: Yup.boolean().oneOf([true], "Você deve marcar este campo."),
});

export default function FinancialNeed() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step onSubmit"))}
			validationSchema={financialNeedSchema}
			title={"Sobre sua renda"}
			img={{
				src: "/illustrations/notebook.webp",
				alt: "Ilustração de um caderno, um lápis amarelo e alguns clips",
			}}
		>
			<RadioInput
				name="financialNeed"
				options={financialNeedOptions}
				question={
					"Você declara que não pode pagar por atendimento jurídico/psicológico?"
				}
			/>
			<CheckboxInfo
				name="checkboxInfo"
				info={`Ao inserir seus dados, você concorda em ter seus dados compartilhados com os organizadores dessa página e aceita receber emails de atualização, conforme descrito na <a href= "https://queroseracolhida.mapadoacolhimento.org/static/politica-de-privacidade.pdf" target="_blank"> política de privacidade</a>. Você pode cancelar o recebimento desses e-mails a qualquer momento.`}
			/>
		</Step>
	);
}
