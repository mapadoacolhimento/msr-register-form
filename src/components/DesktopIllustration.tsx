import { Flex } from "@radix-ui/themes";

export default function DesktopIllustration({
	img,
}: Readonly<{ img: { src: string; alt: string } }>) {
	return (
		<Flex
			display={{ initial: "none", md: "flex" }}
			asChild
			style={{ backgroundColor: "var(--yellow-2)", zIndex: "-1" }}
			justify={"center"}
			align={"center"}
			position={"absolute"}
			top={"0"}
			right={"0"}
			width={"55%"}
			height={"100vh"}
		>
			<aside>
				<img src={img.src} alt={img.alt} style={{ maxWidth: "95%" }} />
			</aside>
		</Flex>
	);
}
