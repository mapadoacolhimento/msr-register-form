import MultiStepFormWrapper from "./MultiStepFormWrapper";
import {
	BasicRegisterInformation,
	DiversityInformation,
	AcceptsOnlineSupport,
	SupportType,
	GenderIdentity,
	GenderViolence,
	DisabilityInformation,
	ViolenceLocation,
	ExternalSupport,
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
	violenceLocation: string;
	externalSupport: string[];
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
				violenceLocation: "",
				externalSupport: [],
			}}
			onSubmit={async (values: Values) =>
				sleep(300).then(() => console.log("Wizard submit", values))
			}
		>
			{BasicRegisterInformation()}
			{DiversityInformation()}
			{DisabilityInformation()}
			{GenderIdentity()}
			{AcceptsOnlineSupport()}
			{SupportType()}
			{GenderViolence()}
			{ViolenceLocation()}
			{ExternalSupport()}
		</MultiStepFormWrapper>
	);
}
