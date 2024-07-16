import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenderViolence from "../GenderViolence";
import MultiStepFormWrapper from "../../MultiStepFormWrapper";
import { sleep } from "../../../../lib";
import { type Values } from "../..";
import { genderViolenceOptions } from "../../../../lib/constants";

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
			{GenderViolence()}
		</MultiStepFormWrapper>
	);
};

describe("<GenderViolence />", () => {
	it("should render fields", () => {
		setup();

		genderViolenceOptions.forEach((option) => {
			const optionElement = screen.getByText(option.name);
			expect(optionElement).toBeInTheDocument();
		});
	});

	it.only("should render an error if no option is selected", async () => {
		setup();

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		await screen.findByText("alert");

		expect(screen.getByRole("alert")).toHaveTextContent(
			"Esse campo é obrigatório."
		);
	});
});
