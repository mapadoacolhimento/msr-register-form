import * as React from "react";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import DesktopIllustration from "@/components/DesktopIllustration";
import Header from "@/components/Header";

export default function CriteriaDenied() {
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
							Sentimos muito
						</Heading>

						<Flex maxWidth={"27rem"}>
							<Text align={"center"}>
								O Mapa do Acolhimento atende mulheres cis, trans ou travestis
								maiores de 18 anos, que vivem no Brasil e enfrentam situações de
								vulnerabilidade socioeconômica.
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
										src="/illustrations/woman-receiving-care.svg"
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
										src="/illustrations/mini-woman-covering-ears.svg"
										alt="Mulher de cabeça baixa tampando os ouvidos"
										width={100}
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
								alt="Mulher de cabeça baixa tampando os ouvidos"
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
				img={{ src: "/illustrations/laptop.webp", alt: "" }}
			/>
		</Grid>
	);
}
