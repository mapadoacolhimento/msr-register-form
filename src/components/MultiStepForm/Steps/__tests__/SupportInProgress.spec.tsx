import { render, screen } from "@testing-library/react";
import SupportInProgress from "../SupportInProgress";

const setup = () => {
	return render(<SupportInProgress />);
};

describe("<SupportInProgress />", () => {
	it("should render headers and descriptions", () => {
		setup();

		const heading1 = screen.getByRole("heading", {
			name: "Você já recebeu uma voluntária",
		});
		expect(heading1).toBeInTheDocument();

		const heading2 = screen.getByRole("heading", {
			name: "Como podemos te ajudar:",
		});
		expect(heading2).toBeInTheDocument();

		const description1 = screen.getByText((content, element: any) => {
			const hasText = (node: any) =>
				node?.textContent &&
				/Verificamos\sque\svocê\sjá\ssolicitou\sajuda\santeriormente\.\sO\scontato\sda\svoluntária\sfoi\senviado\spara\so\sseu\se-mail\.\sDe\stoda\sforma,\sentraremos\sem\scontato\scom\svocê\spor\se-mail\sem\saté\s3\sdias\súteis\spara\scompreender\so\sque\shouve\se,\sse\snecessário,\ste\sindicar\soutra\svoluntária\.\sSe\sdesejar,\spode\snos\scontatar\sdiretamente\spelo\se-mail\satendimento@mapadoacolhimento\.org\sObrigada\spela\sconfiança!/i.test(
					node.textContent
				);

			const nodeHasText = hasText(element);
			const childrenDontHaveText = Array.from(element.childNodes).every(
				(child) => !hasText(child)
			);

			return nodeHasText && childrenDontHaveText;
		});

		expect(description1).toBeInTheDocument();

		const description2 = screen.getByText(
			"Conheça a rede de apoio que você pode acessar e um material preparado com cuidado para te ajudar nesse momento difícil:"
		);
		expect(description2).toBeInTheDocument();
	});

	it("should render help cards", () => {
		setup();

		const image1 = screen.getByRole("img", {
			name: "Mulher recebendo atendimento por outra mulher",
		});
		expect(image1).toBeInTheDocument();

		const heading1 = screen.getByRole("heading", {
			name: "Onde e como posso pedir ajuda?",
		});
		expect(heading1).toBeInTheDocument();

		const description1 = screen.getByText(
			"Conheça os serviços públicos de proteção que você pode acessar"
		);
		expect(description1).toBeInTheDocument();

		const image2 = screen.getByRole("img", {
			name: "Mulher de cabeça baixa tampando os ouvidos",
		});
		expect(image2).toBeInTheDocument();

		const heading2 = screen.getByRole("heading", {
			name: "Sofri violência, e agora?",
		});
		expect(heading2).toBeInTheDocument();

		const description2 = screen.getByText(
			"Um guia prático para deixar o ciclo da violência"
		);
		expect(description2).toBeInTheDocument();
	});

	it("should contact text", () => {
		setup();

		const heartIcon = screen.getByRole("img", {
			name: "Balão de diálogo roxo com um coração dentro",
		});
		expect(heartIcon).toBeInTheDocument();

		const text1 = screen.queryByText(/Ficou\scom\salguma\sdúvida\?/i);
		expect(text1).toBeInTheDocument();

		const text2 = screen.queryByText(/Fale\sconosco\sem\scontato@mapa.org.br/i);
		expect(text2).toBeInTheDocument();
	});
});
