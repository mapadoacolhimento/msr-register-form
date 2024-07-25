import React from "react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import InfoBox from "./InfoBox";

const ExtraSupport = () => (
	<>
		<Heading as={"h2"} size={"6"} align={"center"} mt={"3rem"}>
			Como podemos te ajudar:
		</Heading>
		<Flex maxWidth={"30rem"}>
			<Text align={"center"}>
				Conheça a rede de apoio que você pode acessar e um material preparado
				com cuidado para te ajudar nesse momento difícil:
			</Text>
		</Flex>
		<InfoBox
			imgSrc="/illustrations/woman-getting-support.svg"
			imgAlt="Mulher recebendo atendimento por outra mulher"
			title="Onde e como posso pedir ajuda?"
			description="Conheça os serviços públicos de proteção que você pode acessar"
		/>
		<InfoBox
			imgSrc="/illustrations/woman-covering-ears.svg"
			imgAlt="Mulher de cabeça baixa tampando os ouvidos"
			title="Sofri violência, e agora?"
			description="Um guia prático para deixar o ciclo da violência"
		/>
	</>
);

export default ExtraSupport;
