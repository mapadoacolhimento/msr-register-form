import * as Yup from "yup";
import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, genderIdentityOptions } from "../../../lib";
import HoverInfo from "../../HoverInfo";
import { Strong } from "@radix-ui/themes";

const genderIdentitySchema = Yup.object({
	genderIdentity: Yup.string()
		.oneOf(genderIdentityOptions.map((a) => a.value))
		.required("Esse campo é obrigatório."),
});

export default function GenderIdentity() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step3 onSubmit"))}
			validationSchema={genderIdentitySchema}
			title={"Sobre você"}
			subtitle={
				<>
					Qual sua <Strong>identidade de gênero</Strong>?
				</>
			}
			img={{
				src: "/illustrations/woman-self-hug.webp",
				alt: "Ilustração com uma mulher de cabelo roxo se abraçando",
			}}
		>
			<RadioInput name="genderIdentity" options={genderIdentityOptions} />
			<HoverInfo
				title="O que isso significa?"
				description="Identidade de gênero refere-se à forma como uma pessoa se identifica internamente e como ela se define em termos de gênero. Isso pode ou não corresponder ao sexo atribuído no nascimento."
			/>
		</Step>
	);
}
