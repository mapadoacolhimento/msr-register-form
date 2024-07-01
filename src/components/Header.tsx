import { Box, Section } from "@radix-ui/themes";

export default function Header() {
	return (
		<Section size="1" px="5" asChild>
			<header>
				<Box style={{ borderBottom: "1px solid var(--gray-4)" }} pb={"4"}>
					<img
						src={"/logo.svg"}
						alt="Logo Mapa do Acolhimento"
						height={"30px"}
						width={"auto"}
					/>
				</Box>
			</header>
		</Section>
	);
}
