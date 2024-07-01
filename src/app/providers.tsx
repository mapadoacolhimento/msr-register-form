"use client";

import { Theme, ThemePanel } from "@radix-ui/themes";

export default function Providers({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<Theme accentColor="purple" grayColor="gray" panelBackground="solid">
			{children}
			{process.env.NODE_ENV !== "production" ? <ThemePanel /> : null}
		</Theme>
	);
}
