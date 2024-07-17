import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ExternalSupport from "../ExternalSupport";
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
					externalSupport: [] as string[],
				} as Values
			}
		>
			{ExternalSupport()}
		</MultiStepFormWrapper>
	);
};

describe("<ExternalSupport />", () => {
	it("should render four options", () => {
		setup();

		expect(
			screen.getByRole("checkbox", {
				name: /Não estou sendo acompanhada/i,
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole("checkbox", {
				name: "Estou sendo acompanhada por um(a) psicólogo(a) particular",
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole("checkbox", {
				name: "Estou sendo acompanhada por um(a) advogado(a) particular",
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole("checkbox", {
				name: "Estou sendo acompanhada na defensoria pública/NUDEM",
			})
		).toBeInTheDocument();
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
