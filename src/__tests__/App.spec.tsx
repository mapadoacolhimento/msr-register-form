import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  test("renders headline", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /vite/i })).toBeInTheDocument();
  });
});
