import {
	Box,
	Button,
	Flex,
	Heading,
	Link as ExternalLink,
	Separator,
	Strong,
	Text,
} from "@radix-ui/themes";
import DesktopIllustration from "../components/DesktopIllustration";
import Image from "next/image";
import Link from "next/link";

export default function HomeScreen() {
	return (
		<>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Box>
					<Heading
						as={"h1"}
						size={"8"}
						align={"center"}
						color={"purple"}
						highContrast
					>
						Seja bem-vinda
					</Heading>
					<Flex maxWidth={"23rem"}>
						<Text align={"center"}>
							<Strong>Sofreu violência de gênero?</Strong> Responda as perguntas
							seguintes para receber acolhimento
						</Text>
					</Flex>
				</Box>

				<Box
					py={"5"}
					px={"6"}
					mt={"4"}
					style={{
						backgroundColor: "var(--pink-2)",
						borderRadius: "var(--radius-3)",
					}}
					maxWidth={"28rem"}
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
							Para receber atendimento é preciso ser maior de 18 anos e residir
							no Brasil
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
					<Link href={"/cadastro"}>Quero ser acolhida</Link>
				</Button>

				<Flex maxWidth="23rem" px={"4"}>
					<Text>
						Ao responder as perguntas você está de acordo com a nossa{" "}
						<ExternalLink
							href="https://queroseracolhida.mapadoacolhimento.org/static/politica-de-privacidade.pdf"
							target="_blank"
						>
							política de privacidade
						</ExternalLink>
						.
					</Text>
				</Flex>
			</Box>
			<Flex
				display={{ initial: "none", md: "flex" }}
				asChild
				style={{ backgroundColor: "var(--yellow-2)", zIndex: "-1" }}
				position={"absolute"}
				bottom={"0"}
				right={"0"}
				width={"55%"}
				height={"100%"}
			>
				<Box>
					<img
						src="/illustrations/women-support.svg"
						alt="Ilustração Desktop de três mulheres de costas se abraçando, vestidas de roxo, amarelo e rosa, respectivamente"
						style={{
							maxWidth: "95%",
							position: "absolute",
							bottom: "0",
						}}
					/>
				</Box>
			</Flex>
			<Flex
				position={"absolute"}
				right={"0"}
				display={{ initial: "flex", md: "none" }}
			>
				<Image
					src="/illustrations/women-support.svg"
					width={200}
					height={200}
					alt="Ilustração mobile de três mulheres de costas se abraçando, vestidas de roxo, amarelo e rosa, respectivamente"
				/>
			</Flex>
		</>
	);
}
