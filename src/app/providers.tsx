"use client";

import { Theme } from "@radix-ui/themes";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Theme accentColor="purple" grayColor="gray" panelBackground="solid">
			{children}
		</Theme>
	);
}
