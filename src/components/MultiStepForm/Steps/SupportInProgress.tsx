import * as React from "react";
import { Box, Flex, Grid, Heading, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import DesktopIllustration from "../../DesktopIllustration";
import Header from "../../Header";

export default function SupportInProgress() {
	return (
		<Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
			<div>
				<Header />
				<div>
					<Box
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Heading as={"h2"} size={"8"} align={"center"}>
							Você já recebeu uma voluntária
						</Heading>

						<Flex maxWidth={"30rem"}>
							<Text align={"center"}>
								Verificamos que você já solicitou ajuda anteriormente. O contato
								da voluntária foi enviado para o seu e-mail. De toda forma,
								entraremos em contato com você por e-mail em até{" "}
								<Strong>3 dias úteis</Strong> para compreender o que houve e, se
								necessário, te indicar outra voluntária. Se desejar, pode nos
								contatar diretamente pelo e-mail
								atendimento@mapadoacolhimento.org Obrigada pela confiança!
							</Text>
						</Flex>

						<Heading as={"h2"} size={"6"} align={"center"} mt={"3rem"}>
							Como podemos te ajudar:
						</Heading>
						<Flex maxWidth={"25rem"} direction={"column"} align={"center"}>
							<Text size={"2"} align={"center"}>
								Conheça a rede de apoio que você pode acessar e um material
								preparado com cuidado para te ajudar nesse momento difícil:
							</Text>

							<Box
								py={"5"}
								px={"5"}
								mt={"4"}
								style={{
									backgroundColor: "var(--pink-salmon)",
									borderRadius: "var(--radius-3)",
									display: "flex",
									justifyContent: "center",
								}}
								width={"28rem"}
							>
								<Box
									style={{
										backgroundColor: "var(--pink-soft)",
										minWidth: "8rem",
										display: "flex",
										justifyContent: "center",
									}}
									maxHeight={"6rem"}
								>
									<Image
										src="/illustrations/woman-getting-support.svg"
										alt="Mulher recebendo atendimento por outra mulher"
										width={100}
										height={100}
									/>
								</Box>
								<Box px={"3"}>
									<Heading as={"h2"} size={"5"}>
										Onde e como posso pedir ajuda?
									</Heading>
									Conheça os serviços públicos de proteção que você pode acessar
								</Box>
							</Box>

							<Box
								py={"5"}
								px={"5"}
								mt={"4"}
								style={{
									backgroundColor: "var(--pink-salmon)",
									borderRadius: "var(--radius-3)",
									display: "flex",
									justifyContent: "center",
								}}
								width={"28rem"}
							>
								<Box
									style={{
										backgroundColor: "var(--pink-soft)",
										minWidth: "8rem",
										display: "flex",
										justifyContent: "center",
									}}
									maxHeight={"6rem"}
								>
									<Image
										src="/illustrations/woman-covering-ears.svg"
										alt="Mulher de cabeça baixa tampando os ouvidos"
										width={120}
										height={100}
									/>
								</Box>
								<Box px={"3"}>
									<Heading as={"h2"} size={"5"}>
										Sofri violência, e agora?
									</Heading>
									Um guia prático para deixar o ciclo da violência
								</Box>
							</Box>
						</Flex>
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
					</Box>
				</div>
			</div>
			<DesktopIllustration
				img={{
					src: "/illustrations/laptop.svg",
					alt: "Computador branco com rosa,  com a logo roxa do mapa do acolhimento na tela do monitor",
				}}
			/>
			<Box
				position={"absolute"}
				right={"0"}
				bottom="-15rem"
				display={{ initial: "block", md: "none" }}
			>
				<Image
					src="/illustrations/laptop.svg"
					width={1}
					height={1}
					alt="Computador branco com rosa,  com a logo roxa do mapa do acolhimento na tela do monitor"
				/>
			</Box>
		</Grid>
	);
}