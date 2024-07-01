import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Quero ser acolhida - Mapa do Acolhimento",
	description:
		"Somos uma plataforma que conecta mulheres que sofreram violência a uma rede de psicólogas e advogadas dispostas a ajudá-las de forma voluntária. Clique aqui para acessar a nossa rede de apoio!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>
				<body className={inter.className}>{children}</body>
			</body>
		</html>
	);
}
