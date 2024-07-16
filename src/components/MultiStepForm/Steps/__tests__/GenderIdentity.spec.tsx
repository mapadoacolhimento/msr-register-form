import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenderIdentity from "../GenderIdentity";
import MultiStepFormWrapper from "../../MultiStepFormWrapper";
import { sleep } from "../../../../lib";
import { type Values } from "../..";
import { genderIdentityOptions } from "../../../../lib/constants";

const setup = () => {
	return render(
		<MultiStepFormWrapper
			onSubmit={async (values) =>
				await sleep(300).then(() => console.log(values))
			}
			initialValues={
				{
					genderIdentity: "",
				} as Values
			}
		>
			{GenderIdentity()}
		</MultiStepFormWrapper>
	);
};

describe("<GenderIdentity />", () => {
	it("should render fields", () => {
		setup();

		genderIdentityOptions.forEach((option) => {
			const optionElement = screen.getByText(option.name);
			expect(optionElement).toBeInTheDocument();
		});
	});

	it("should render an error if no option is selected", async () => {
		setup();

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		await screen.findByRole("alert");

		expect(screen.getByRole("alert")).toHaveTextContent(
			"Esse campo é obrigatório."
		);
	});
});
