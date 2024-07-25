import React from "react";
import { Grid } from "@radix-ui/themes";
import Header from "../../../Header";
import HeaderComponent from "./components/Header";
import BackgroundIllustration from "./components/BackgroundIllustration";
import Contact from "./components/Contact";
import ExtraSupport from "./components/ExtraSupport";

export default function SupportInProgress() {
	return (
		<Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
			<div>
				<Header />
				<HeaderComponent
					title="Você já recebeu uma voluntária"
					subtitle="Verificamos que você já solicitou ajuda anteriormente. O contato da voluntária foi enviado para o seu e-mail. De toda forma, entraremos em contato com você por e-mail em até 3 dias úteis para compreender o que houve e, se necessário, te indicar outra voluntária. Se desejar, pode nos contatar diretamente pelo e-mail atendimento@mapadoacolhimento.org Obrigada pela confiança!"
				>
					<ExtraSupport />
					<Contact />
				</HeaderComponent>
			</div>
			<BackgroundIllustration />
		</Grid>
	);
}
