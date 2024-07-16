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

		const colorInput = screen.getByRole("combobox", { name: /Cor/i });
		const hasDisabilityInput = screen.getByRole("combobox", {
			name: /Pessoa com deficiência/i,
		});

		expect(colorInput).toBeInTheDocument();
		expect(hasDisabilityInput).toBeInTheDocument();
	});

	it("should display error if color field is empty", async () => {
		setup();

		const hasDisabilityInput = screen.getByRole("combobox", {
			name: /Pessoa com deficiência/i,
		});
		await userEvent.click(hasDisabilityInput);
		await userEvent.click(await screen.findByRole("option", { name: /sim/i }));

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		expect(screen.getByRole("alert")).toHaveTextContent(
			"Esse campo é obrigatório."
		);
	});

	it("should display error if disability status is empty", async () => {
		setup();

		const colorInput = screen.getByRole("combobox", { name: /Cor/i });
		await userEvent.click(colorInput);
		await userEvent.click(
			await screen.findByRole("option", { name: /preta/i })
		);

		const btn = screen.getByRole("button", { name: /enviar/i });
		await userEvent.click(btn);

		expect(await screen.findByRole("alert")).toBeInTheDocument();
		expect(screen.getByRole("alert")).toHaveTextContent(
			"Esse campo é obrigatório."
		);
	});
});
