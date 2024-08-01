import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ViolenceLocation from "../ViolenceLocation";
import MultiStepFormWrapper from "../../MultiStepFormWrapper";
import { sleep } from "../../../../lib";
import { type Values } from "../..";
import { violenceLocationOptions } from "../../../../lib/constants";

vi.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
		};
	},
}));

const setup = () => {
	return render(
		<MultiStepFormWrapper
			onSubmit={async (values) =>
				await sleep(300).then(() => console.log(values))
			}
			initialValues={
				{
					violenceLocation: "",
				} as Values
			}
		>
			{ViolenceLocation()}
		</MultiStepFormWrapper>
	);
};

describe("<ViolenceLocation />", () => {
	it("should render fields", () => {
		setup();

		violenceLocationOptions.forEach((option) => {
			const optionElement = screen.getByRole("radio", { name: option.name });
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
