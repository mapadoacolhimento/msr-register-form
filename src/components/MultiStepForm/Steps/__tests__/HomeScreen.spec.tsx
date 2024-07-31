import { render, screen } from "@testing-library/react";
import HomeScreen from "../HomeScreen";

const setup = () => {
	return render(<HomeScreen />);
};

describe("<HomeScreen />", () => {
	it("should render headers and descriptions", () => {
		setup();

		const heading1 = screen.getByText("Seja bem-vinda");
		expect(heading1).toBeInTheDocument();

		const description1 = screen.getByText(
			"Responda as perguntas seguintes para receber acolhimento"
		);
		expect(description1).toBeInTheDocument();

		const description2 = screen.getByText(
			"O atendimento do Mapa do Acolhimento é totalmente gratuito"
		);
		expect(description2).toBeInTheDocument();

		const contidion1 = screen.getByText(
			"Para receber atendimento é preciso ser maior de 18 anos e residir no Brasil"
		);
		expect(contidion1).toBeInTheDocument();

		const contidion2 = screen.getByText(
			"Estar em situação de vulnerabilidade socioeconômica/baixa renda"
		);
		expect(contidion2).toBeInTheDocument();

		const button = screen.getByRole("button", { name: "Quero ser acolhida" });
		expect(button).toBeInTheDocument();
	});

	it("should render background image", () => {
		setup();

		const desktopImage = screen.getByRole("img", {
			name: "Ilustração Desktop de três mulheres de costas se abraçando, vestidas de roxo, amarelo e rosa, respectivamente",
		});
		expect(desktopImage).toBeInTheDocument();

		const mobileImage = screen.getByRole("img", {
			name: "Ilustração mobile de três mulheres de costas se abraçando, vestidas de roxo, amarelo e rosa, respectivamente",
		});
		expect(mobileImage).toBeInTheDocument();
	});
});
