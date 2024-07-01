import React from "react";
import { Theme } from "@radix-ui/themes";

import { MultiStepForm } from "./components";

export default function App() {
	<React.StrictMode>
		<Theme accentColor="purple" grayColor="gray" panelBackground="solid">
			<MultiStepForm />
			{/* {import.meta.env.DEV ? <ThemePanel /> : null} */}
		</Theme>
	</React.StrictMode>;
}
