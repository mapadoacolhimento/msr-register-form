import { Flex } from "@radix-ui/themes";

export default function DesktopIllustration({
	img,
}: Readonly<{ img: { src: string; alt: string } }>) {
	return (
		<Flex
			display={{ initial: "none", md: "flex" }}
			asChild
			style={{ backgroundColor: "var(--yellow-2)" }}
			height={"calc(100vh - 112px)"}
			justify={"center"}
			align={"center"}
			position={"absolute"}
			top={"0"}
			right={"0"}
			width={"55%"}
		>
			<aside>
				<img
					src={img.src}
					alt={img.alt}
					style={{ minWidth: "100%", maxHeight: "100%" }}
				/>
			</aside>
		</Flex>
	);
}
