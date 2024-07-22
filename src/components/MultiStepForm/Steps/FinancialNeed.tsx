import * as React from "react";
import * as Yup from "yup";
import { Strong } from "@radix-ui/themes";

import Step from "../Step";
import RadioInput from "../../RadioInput";
import CheckboxInfo from "../../CheckboxInfo";
import { sleep, financialNeedOptions } from "../../../lib";

const financialNeedSchema = Yup.object({
	financialNeed: Yup.string()
		.oneOf(financialNeedOptions.map((a) => a.value))
		.required("Esse campo é obrigatório."),
	terms: Yup.boolean().oneOf([true], "Você deve marcar este campo."),
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
					<>
						Você declara que <Strong>não pode pagar</Strong> por atendimento
						jurídico/psicológico?
					</>
				}
			/>
			<CheckboxInfo name="terms">
				Ao inserir seus dados, você concorda em ter seus dados compartilhados
				com os organizadores dessa página e aceita receber emails de
				atualização, conforme descrito na{" "}
				<a
					href="https://queroseracolhida.mapadoacolhimento.org/static/politica-de-privacidade.pdf"
					target="_blank"
				>
					 política de privacidade
				</a>
				. Você pode cancelar o recebimento desses e-mails a qualquer momento.
			</CheckboxInfo>
		</Step>
	);
}
