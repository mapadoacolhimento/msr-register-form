import * as Yup from "yup";
import Step from "../Step";
import RadioInput from "../../RadioInput";
import { sleep, genderIdentityOptions } from "../../../lib";

const genderIdentitySchema = Yup.object({
	genderIdentity: Yup.string()
		.oneOf(["ciswoman", "transwoman", "non-binary", "genderfluid"])
		.required("Esse campo é obrigatório."),
});

export default function GenderIdentity() {
	return (
		<Step
			onSubmit={() => sleep(300).then(() => console.log("Step3 onSubmit"))}
			validationSchema={genderIdentitySchema}
			title={"Sobre você"}
			img={{
				src: "/illustrations/woman-self-hug.webp",
				alt: "Ilustração com uma mulher de cabelo roxo se abraçando",
			}}
		>
			<RadioInput
				name="genderIdentity"
				options={genderIdentityOptions}
				question={"Como você se identifica?"}
			/>
		</Step>
	);
}
