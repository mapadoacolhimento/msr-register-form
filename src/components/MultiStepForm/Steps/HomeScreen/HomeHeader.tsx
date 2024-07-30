import { Box, Flex, Link, Section, Text } from "@radix-ui/themes";

export default function HomeHeader() {
	return (
		<Section size="1" px="5" asChild>
			<header>
				<Flex
					justify="between"
					style={{ borderBottom: "1px solid var(--gray-4)" }}
					align="end"
					pb="2"
				>
					<Box>
						<img
							src={"/logo.svg"}
							alt="Logo Mapa do Acolhimento"
							height={"30px"}
							width={"auto"}
						/>
					</Box>
					<Flex gap={"7"}>
						<Link href="">Preciso de ajuda urgente</Link>
						<Link href="https://mapadoacolhimento.org">Sobre nós</Link>
					</Flex>
				</Flex>
			</header>
		</Section>
	);
}
