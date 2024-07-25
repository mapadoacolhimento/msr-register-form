import React from "react";
import { Heading, Box, Flex, Text } from "@radix-ui/themes";

interface HeaderComponentProps {
	title: string;
	subtitle?: string;
	children?: React.ReactNode;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
	title,
	subtitle,
	children,
}) => (
	<Box
		style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		}}
	>
		<Heading as={"h2"} size={"8"} align={"center"}>
			{title}
		</Heading>
		{subtitle && (
			<Flex maxWidth={"30rem"}>
				<Text align={"center"}>{subtitle}</Text>
			</Flex>
		)}
		{children}
	</Box>
);

export default HeaderComponent;
