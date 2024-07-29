"use client";

import { Box, Heading, Text } from "@radix-ui/themes";
import InfoBox from "./InfoBox";

const ExtraSupport = () => (
	<>
		<Box pb={"2"} asChild>
			<Heading
				as={"h2"}
				size={"5"}
				align={"center"}
				color={"purple"}
				highContrast
			>
				Como podemos te ajudar:
			</Heading>
		</Box>
		<Box pb={{ initial: "5", sm: "6" }} asChild>
			<Text align={"center"} size={"2"}>
				Conheça a rede de apoio que você pode acessar e um material preparado
				com cuidado para te ajudar nesse momento difícil:
			</Text>
		</Box>
		<Box pb={"4"}>
			<InfoBox
				imgSrc="/illustrations/woman-getting-support.svg"
				imgAlt="Mulher recebendo atendimento por outra mulher"
				title="Onde e como posso pedir ajuda?"
				description="Conheça os serviços públicos de proteção que você pode acessar"
			/>
		</Box>
		<InfoBox
			imgSrc="/illustrations/woman-covering-ears.svg"
			imgAlt="Mulher de cabeça baixa tampando os ouvidos"
			title="Sofri violência, e agora?"
			description="Um guia prático para deixar o ciclo da violência"
		/>
	</>
);

export default ExtraSupport;
