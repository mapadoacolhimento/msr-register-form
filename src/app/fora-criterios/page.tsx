import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Contact from "../../components/Contact";
import ExtraSupport from "../../components/ExtraSupport";
import DesktopIllustration from "../../components/DesktopIllustration";

export default function Page() {
	return (
		<Flex width={"100%"} justify={"center"}>
			<Flex
				direction={"column"}
				align={"center"}
				px={"7"}
				maxWidth={"30rem"}
				pt={{ initial: "8", md: "9" }}
			>
				<Box asChild pb={"4"}>
					<Heading
						as={"h1"}
						size={"8"}
						align={"center"}
						color={"purple"}
						highContrast
					>
						Sentimos muito
					</Heading>
				</Box>
				<Box pb={{ initial: "7", sm: "8" }} asChild>
					<Text align={"center"}>
						O Mapa do Acolhimento atende mulheres cis, trans ou travestis
						maiores de 18 anos, que vivem no Brasil e enfrentam situações de
						vulnerabilidade socioeconômica.
					</Text>
				</Box>
				<ExtraSupport />
				<Contact />
			</Flex>
			<DesktopIllustration
				img={{
					src: "/illustrations/laptop.svg",
					alt: "Computador branco com rosa, com a logo roxa do mapa do acolhimento na tela do monitor",
				}}
			/>
		</Flex>
	);
}
