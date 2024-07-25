import { Flex } from "@radix-ui/themes";

export default function DesktopIllustration({
	img,
}: Readonly<{ img: { src: string; alt: string } }>) {
	return (
		<Flex
			display={{ initial: "none", md: "flex" }}
			asChild
			style={{ backgroundColor: "var(--yellow-2)", minHeight: "100%" }}
			height={"calc(100vh - 100px)"}
			justify={"center"}
			align={"center"}
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
