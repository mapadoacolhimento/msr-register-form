// import "@radix-ui/themes/styles.css";
// import "@fontsource-variable/nunito-sans";

import "../theme/colors/purple.css";
import "../theme/colors/yellow.css";
import "../theme/colors/pink.css";
import "../theme/colors/gray.css";
// import "../theme/typography.css";
import "../theme/index.css";

import { ClientOnly } from "./client";

export default function Page() {
	return <ClientOnly />;
}
