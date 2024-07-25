import React from "react";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";

const Contact = () => (
	<Flex px={"3"} py={"3"} pb={"9"} align={"center"} gap={"3"}>
		<Image
			src="/illustrations/good-msg.svg"
			alt="Balão de diálogo roxo com um coração dentro"
			width={30}
			height={30}
		/>
		Ficou com alguma dúvida? <br />
		Fale conosco em contato@mapa.org.br
	</Flex>
);

export default Contact;
