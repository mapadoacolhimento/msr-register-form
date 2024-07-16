import MultiStepFormWrapper from "./MultiStepFormWrapper";
import {
	BasicRegisterInformation,
	DiversityInformation,
	AcceptsOnlineSupport,
	SupportType,
	GenderIdentity,
	GenderViolence,
} from "./Steps";
import { sleep } from "../../lib";

export interface Values {
	email: string;
	firstName: string;
	confirmEmail: string;
	phone: string;
	dateOfBirth: string;
	color: string;
	hasDisability: string;
	acceptsOnlineSupport: string;
	supportType: string[];
	genderIdentity: string;
	genderViolence: string;
}

export default function MultiStepForm() {
	return (
		<MultiStepFormWrapper
			initialValues={{
				email: "",
				firstName: "",
				confirmEmail: "",
				phone: "",
				dateOfBirth: "",
				color: "",
				hasDisability: "",
				acceptsOnlineSupport: "",
				supportType: [],
				genderIdentity: "",
				genderViolence: "",
			}}
			onSubmit={async (values: Values) =>
				sleep(300).then(() => console.log("Wizard submit", values))
			}
		>
			{BasicRegisterInformation()}
			{DiversityInformation()}
			{GenderIdentity()}
			{AcceptsOnlineSupport()}
			{SupportType()}
			{GenderViolence()}
		</MultiStepFormWrapper>
	);
}
