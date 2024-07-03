import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BasicRegisterInformation from "../BasicRegisterInformation";
import MultiStepFormWrapper from "../../MultiStepFormWrapper";
import { sleep } from "../../../../utils";
import { type Values } from "../..";

const setup = () => {
	return render(
		<MultiStepFormWrapper
			onSubmit={async (values) =>
				await sleep(300).then(() => console.log(values))
			}
			initialValues={
				{
					email: "",
					name: "",
					confirmEmail: "",
					phone: "",
				} as Values
			}
		>
			{BasicRegisterInformation()}
		</MultiStepFormWrapper>
	);
};

describe("<BasicRegisterInformation />", () => {
	it("should render email fields", () => {
		setup();

		const emailInput = screen.getByRole("textbox", { name: "E-mail" });
		const confirmEmailInput = screen.getByRole("textbox", {
			name: "Confirme seu E-mail",
		});

		expect(emailInput).toBeInTheDocument();
		expect(confirmEmailInput).toBeInTheDocument();
	});

	it("should render empty field error if no info provided", async () => {
		setup();

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		await screen.findAllByRole("alert");

		expect(screen.getAllByRole("alert")).toHaveLength(4);
	});

	it("should render invalid email field error if no valid email is provided", async () => {
		setup();

		const emailInput = screen.getByRole("textbox", { name: "E-mail" });
		await userEvent.type(emailInput, "test");
		expect(emailInput).toHaveValue("test");

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		expect(
			await screen.findByText(/Insira um e-mail válido./i)
		).toBeInTheDocument();
	});
});
