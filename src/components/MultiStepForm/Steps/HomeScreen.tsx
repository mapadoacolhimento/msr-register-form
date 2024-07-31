import { Box, Button, Link, Separator, Strong, Text } from "@radix-ui/themes";
import HeaderComponent from "./HeaderComponent";
import DesktopIllustration from "../../DesktopIllustration";
import Image from "next/image";

export default function HomeScreen() {
	return (
		<>
			<div>
				<HeaderComponent
					title="Seja bem-vinda"
					subtitle={
						<>
							<Strong>Sofreu violência de gênero?</Strong> Responda as perguntas
							seguintes para receber acolhimento
						</>
					}
				>
					<Box
						py={"5"}
						px={"5"}
						mt={"4"}
						style={{
							backgroundColor: "var(--pink-2)",
							borderRadius: "var(--radius-3)",
						}}
						width={"28rem"}
					>
						<Box
							style={{
								display: "flex",
								gap: "1rem",
								justifyContent: "center",
							}}
						>
							<Image
								src="/icons/heart.svg"
								alt="coração dentro de um balão de pensamento"
								width={30}
								height={30}
							/>
							<Text>
								O atendimento do Mapa do Acolhimento é totalmente gratuito
							</Text>
						</Box>
						<Separator orientation="horizontal" size="4" my="1.5rem" />

						<Box
							style={{
								display: "flex",
								gap: "1rem",
								justifyContent: "center",
							}}
						>
							<Image
								src="/icons/user-profile.svg"
								alt="coração dentro de um balão de pensamento"
								width={30}
								height={30}
							/>
							<Text>
								Para receber atendimento é preciso ser maior de 18 anos e
								residir no Brasil
							</Text>
						</Box>
						<Separator orientation="horizontal" size="4" my="1.5rem" />

						<Box
							style={{
								display: "flex",
								gap: "1rem",
								justifyContent: "center",
							}}
						>
							<Image
								src="/icons/planner.svg"
								alt="coração dentro de um balão de pensamento"
								width={30}
								height={30}
							/>
							<Text>
								Estar em situação de vulnerabilidade socioeconômica/baixa renda
							</Text>
						</Box>
					</Box>

					<Button my="6" size={"4"}>
						Quero ser acolhida
					</Button>

					<Box maxWidth="25rem">
						<Text>
							Ao responder as perguntas você está de acordo com a nossa{" "}
							<Link
								href="https://queroseracolhida.mapadoacolhimento.org/static/politica-de-privacidade.pdf"
								target="_blank"
							>
								política de privacidade
							</Link>
							.
						</Text>
					</Box>
				</HeaderComponent>
			</div>

			<DesktopIllustration
				img={{
					src: "/illustrations/three_women.svg",
					alt: "Ilustração Desktop de três mulheres de costas se abraçando, vestidas de roxo, amarelo e rosa, respectivamente",
				}}
				data-testid="desktop-illustration"
			/>
			<Box
				position={"absolute"}
				right={"0"}
				bottom="-15rem"
				display={{ initial: "block", md: "none" }}
			>
				<Image
					src="/illustrations/three_women.svg"
					width={1}
					height={1}
					alt="Ilustração mobile de três mulheres de costas se abraçando, vestidas de roxo, amarelo e rosa, respectivamente"
					data-testid="mobile-illustration"
				/>
			</Box>
		</>
	);
}
