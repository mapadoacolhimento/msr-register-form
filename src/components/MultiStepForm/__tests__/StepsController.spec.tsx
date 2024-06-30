import { render, screen } from "@testing-library/react";
import StepsController, { StepsControllerProps } from "../StepsController";

const defaultProps = {
  stepName: "Seus dados",
  stepNumber: 1,
  isButtonDisabled: false,
  isLastStep: false,
  progress: 0,
  img: {
    src: "https://picsum.photos/seed/picsum/200/300",
    alt: "test",
  },
};

const setup = (props: StepsControllerProps) => {
  return render(<StepsController {...props} />);
};

describe("<StepsController />", () => {
  it("should render the step title", () => {
    setup(defaultProps);
    expect(
      screen.getByRole("heading", {
        name: /1. seus dados/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });
  it("should render a continue btn", () => {
    setup(defaultProps);
    expect(
      screen.getByRole("button", { name: /continuar/i })
    ).toBeInTheDocument();
  });
  it("should render a disabled btn", () => {
    setup({
      ...defaultProps,
      isButtonDisabled: true,
    });
    expect(screen.getByRole("button", { name: /continuar/i })).toBeDisabled();
  });
  it("should render a send btn", () => {
    setup({
      ...defaultProps,
      isLastStep: true,
    });
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });
  it("should render progressbar with 0% progress", () => {
    setup(defaultProps);
    expect(
      screen.getByRole("progressbar", { value: { now: 0, max: 100 } })
    ).toBeInTheDocument();
  });
  it("should render progressbar with 75% progress", () => {
    setup({
      ...defaultProps,
      progress: 75,
    });
    expect(
      screen.getByRole("progressbar", {
        value: { now: 75, max: 100 },
      })
    ).toBeInTheDocument();
  });
});
