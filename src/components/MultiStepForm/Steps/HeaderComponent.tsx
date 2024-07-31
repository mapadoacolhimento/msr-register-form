import { Heading, Box, Flex, Text } from "@radix-ui/themes";

interface HeaderComponentProps {
	title: string;
	subtitle?: React.ReactNode;
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
		<Heading
			as={"h1"}
			size={"8"}
			align={"center"}
			color={"purple"}
			highContrast
		>
			{title}
		</Heading>
		{subtitle && (
			<Flex maxWidth={"23rem"}>
				<Text align={"center"}>{subtitle}</Text>
			</Flex>
		)}
		{children}
	</Box>
);

export default HeaderComponent;
