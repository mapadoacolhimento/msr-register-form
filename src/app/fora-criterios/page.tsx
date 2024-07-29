import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Contact from "../../components/Contact";
import ExtraSupport from "../../components/ExtraSupport";

export default function Page() {
	return (
		<>
			<Flex direction={"column"} align={"center"} px={"7"} maxWidth={"30rem"}>
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
			{/* <BackgroundIllustration /> */}
		</>
	);
}
