import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DiversityInformation from "../DiversityInformation";
import MultiStepFormWrapper from "../../MultiStepFormWrapper";
import { sleep } from "../../../../lib";

import { type Values } from "../..";

const setup = () => {
	return render(
		<MultiStepFormWrapper
			onSubmit={async (values) =>
				await sleep(300).then(() => console.log(values))
			}
			initialValues={
				{
					color: "",
					hasDisability: "",
				} as Values
			}
		>
			{DiversityInformation()}
		</MultiStepFormWrapper>
	);
};

describe("<DiversityInformation />", () => {
	it("should render fields", () => {
		setup();

		const colorInput = screen.getByLabelText("Cor");
		const hasDisabilityInput = screen.getByLabelText("Pessoa com deficiência");

		expect(colorInput).toBeInTheDocument();
		expect(hasDisabilityInput).toBeInTheDocument();
	});

	it("should display error if colorInput is empty", async () => {
		setup();

		const colorInput = screen.getByLabelText("Cor");
		const hasDisabilityInput = screen.getByLabelText("Pessoa com deficiência");

		await userEvent.selectOptions(hasDisabilityInput, ["Sim"]);

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		expect(screen.getAllByText("Esse campo é obrigatório."));
	});

	it("should display error if disability status is empty", async () => {
		setup();

		const colorInput = screen.getByLabelText("Cor");

		await userEvent.selectOptions(colorInput, ["Preta"]);

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		expect(await screen.findByRole("alert")).toBeInTheDocument();
		expect(screen.getByRole("alert")).toHaveTextContent(
			"Esse campo é obrigatório."
		);
	});
});
