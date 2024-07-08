import MultiStepFormWrapper from "./MultiStepFormWrapper";
import {
	BasicRegisterInformation,
	AcceptsOnlineSupport,
	SupportType,
} from "./Steps";
import { sleep } from "../../lib";

export interface Values {
	email: string;
	name: string;
	confirmEmail: string;
	phone: string;
	acceptsOnlineSupport: string;
	supportType: string[];
}

export default function MultiStepForm() {
	return (
		<MultiStepFormWrapper
			initialValues={{
				email: "",
				name: "",
				confirmEmail: "",
				phone: "",
				acceptsOnlineSupport: "",
				supportType: [],
			}}
			onSubmit={async (values: Values) =>
				sleep(300).then(() => console.log("Wizard submit", values))
			}
		>
			{BasicRegisterInformation()}
			{AcceptsOnlineSupport()}
			{SupportType()}
		</MultiStepFormWrapper>
	);
}
