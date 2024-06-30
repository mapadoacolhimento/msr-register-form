import { Box, Section } from "@radix-ui/themes";
import logo from "../assets/logo.svg";

export default function Header() {
	return (
		<Section size="1" px="5" asChild>
			<header>
				<Box style={{ borderBottom: "1px solid var(--gray-4)" }} pb={"4"}>
					<img
						src={logo}
						alt="Logo Mapa do Acolhimento"
						height={"30px"}
						width={"auto"}
					/>
				</Box>
			</header>
		</Section>
	);
}
