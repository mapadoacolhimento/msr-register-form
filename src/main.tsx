import "@radix-ui/themes/styles.css";
import "@fontsource-variable/nunito-sans";

import "./theme/colors/purple.css";
import "./theme/colors/yellow.css";
import "./theme/colors/pink.css";
import "./theme/colors/gray.css";
import "./theme/typography.css";
import "./theme/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Theme, ThemePanel } from "@radix-ui/themes";

import { MultiStepForm } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="purple" grayColor="gray" panelBackground="solid">
      <MultiStepForm />
      {import.meta.env.DEV ? <ThemePanel /> : null}
    </Theme>
  </React.StrictMode>,
);
