import React from "react";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Header from "../../../Header";
import HeaderComponent from "./components/Header";
import InfoBox from "./components/InfoBox";
import Image from "next/image";
import BackgroundIllustration from "./components/BackgroundIllustration";

export default function CriteriaDenied() {
	return (
		<Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
			<div>
				<Header />
				<HeaderComponent
					title="Sentimos muito"
					subtitle="O Mapa do Acolhimento atende mulheres cis, trans ou travestis maiores de 18 anos, que vivem no Brasil e enfrentam situações de vulnerabilidade socioeconômica."
				>
					<Heading as={"h2"} size={"6"} align={"center"} mt={"3rem"}>
						Como podemos te ajudar:
					</Heading>
					<Flex maxWidth={"30rem"}>
						<Text align={"center"}>
							Conheça a rede de apoio que você pode acessar e um material
							preparado com cuidado para te ajudar nesse momento difícil:
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
					<Flex px={"3"} py={"3"} pb={"9"} align={"center"} gap={"3"}>
						<Image
							src="/illustrations/good-msg.svg"
							alt="Balão de diálogo roxo com um coração dentro"
							width={30}
							height={30}
						/>
						Ficou com alguma dúvida? <br />
						Fale conosco em contato@mapa.org.br
					</Flex>
				</HeaderComponent>
			</div>
			<BackgroundIllustration />
		</Grid>
	);
}
