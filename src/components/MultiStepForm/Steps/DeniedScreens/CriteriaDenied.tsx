import React from "react";
import { Grid } from "@radix-ui/themes";
import Header from "../../../Header";
import HeaderComponent from "./components/Header";
import BackgroundIllustration from "./components/BackgroundIllustration";
import Contact from "./components/Contact";
import ExtraSupport from "./components/ExtraSupport";

export default function CriteriaDenied() {
	return (
		<Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
			<div>
				<Header />
				<HeaderComponent
					title="Sentimos muito"
					subtitle="O Mapa do Acolhimento atende mulheres cis, trans ou travestis maiores de 18 anos, que vivem no Brasil e enfrentam situações de vulnerabilidade socioeconômica."
				>
					<ExtraSupport />
					<Contact />
				</HeaderComponent>
			</div>
			<BackgroundIllustration />
		</Grid>
	);
}
