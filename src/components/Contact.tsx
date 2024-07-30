"use client";

import React from "react";
import { Flex, Text, Link } from "@radix-ui/themes";
import Image from "next/image";

const Contact = () => (
	<Flex align={"center"} gap={"3"} pt={"5"}>
		<Image
			src="/illustrations/chat-msg.svg"
			alt="Balão de diálogo roxo com um coração dentro"
			width={30}
			height={30}
		/>
		<Flex direction={"column"}>
			<Text size={"2"}>Ficou com alguma dúvida?</Text>
			<Text size={"2"}>
				Fale conosco em{" "}
				<Link href={"mailto:contato@mapa.org.br"} target={"_blank"}>
					contato@mapa.org.br
				</Link>
			</Text>
		</Flex>
	</Flex>
);

export default Contact;
