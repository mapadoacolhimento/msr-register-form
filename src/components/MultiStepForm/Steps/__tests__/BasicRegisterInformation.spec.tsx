import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BasicRegisterInformation from "../BasicRegisterInformation";
import MultiStepFormWrapper from "../../MultiStepFormWrapper";
import { Values } from "../..";
import { sleep } from "../../../../utils";

const setup = () => {
  return (
    <MultiStepFormWrapper
      onSubmit={async (values) =>
        await sleep(300).then(() => console.log(values))
      }
      initialValues={
        {
          email: "",
        } as Values
      }
    >
      {BasicRegisterInformation()}
    </MultiStepFormWrapper>
  );
};

describe("<BasicRegisterInformation />", () => {
  it("should render email field", () => {
    render(setup());

    expect(
      screen.getByRole("textbox", { name: /E-mail/i }),
    ).toBeInTheDocument();
  });

  it("should render empty field error if no info provided", async () => {
    render(setup());

    const btn = screen.getByRole("button", { name: /enviar/i });
    await userEvent.click(btn);

    await screen.findByRole("alert");

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Esse campo é obrigatório.",
    );
  });

  it("should render empty field error if no info provided", async () => {
    render(setup());

    const emailInput = screen.getByRole("textbox", {
      name: /E-mail/i,
    });
    await userEvent.type(emailInput, "test");

    const btn = screen.getByRole("button", { name: /enviar/i });
    await userEvent.click(btn);

    await screen.findByRole("alert");

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Insira um e-mail válido.",
    );
  });
});
