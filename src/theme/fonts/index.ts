import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito-sans",
});

const idealista = localFont({
	src: [
		{
			path: "./Idealista/Idealista-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-idealista",
});

export { nunitoSans, idealista };
