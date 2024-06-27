import "@radix-ui/themes/styles.css";
import "@fontsource-variable/nunito-sans";

import "./theme/colors/purple.css";
import "./theme/colors/yellow.css";
import "./theme/colors/pink.css";
import "./theme/colors/gray.css";
import "./theme/index.css";
import "./theme/typography.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Theme, ThemePanel } from "@radix-ui/themes";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="purple" grayColor="gray" panelBackground="solid">
      <App />
      <ThemePanel />
    </Theme>
  </React.StrictMode>,
);
