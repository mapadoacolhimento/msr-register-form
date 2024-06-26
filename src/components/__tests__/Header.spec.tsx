import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("<Header />", () => {
  it("should render the image logo", () => {
    render(<Header />);

    expect(
      screen.getByRole("img", { name: /Logo Mapa do Acolhimento/i }),
    ).toBeInTheDocument();
  });
});
