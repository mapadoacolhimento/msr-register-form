import React from "react";
import { Box, Heading } from "@radix-ui/themes";
import Image from "next/image";

interface InfoBoxProps {
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
	imgSrc,
	imgAlt,
	title,
	description,
}) => (
	<Box
		py={"5"}
		px={"5"}
		mt={"4"}
		style={{
			backgroundColor: "var(--pink-salmon)",
			borderRadius: "var(--radius-3)",
			display: "flex",
			justifyContent: "center",
		}}
		width={"28rem"}
	>
		<Box
			style={{
				backgroundColor: "var(--pink-soft)",
				minWidth: "8rem",
				display: "flex",
				justifyContent: "center",
			}}
			maxHeight={"6rem"}
		>
			<Image src={imgSrc} alt={imgAlt} width={100} height={100} />
		</Box>
		<Box px={"3"}>
			<Heading as={"h2"} size={"5"}>
				{title}
			</Heading>
			{description}
		</Box>
	</Box>
);

export default InfoBox;
