import React from "react";
import { Box } from "@radix-ui/themes";
import Image from "next/image";
import DesktopIllustration from "../../../../DesktopIllustration";

const BackgroundIllustration = () => (
	<>
		<DesktopIllustration
			img={{
				src: "/illustrations/laptop.svg",
				alt: "Computador branco com rosa, com a logo roxa do mapa do acolhimento na tela do monitor",
			}}
		/>
		<Box
			position={"absolute"}
			right={"0"}
			bottom="-15rem"
			display={{ initial: "block", md: "none" }}
		>
			<Image
				src="/illustrations/laptop.svg"
				width={1}
				height={1}
				alt="Computador branco com rosa, com a logo roxa do mapa do acolhimento na tela do monitor"
			/>
		</Box>
	</>
);

export default BackgroundIllustration;
