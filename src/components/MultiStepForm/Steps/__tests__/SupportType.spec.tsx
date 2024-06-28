import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SupportType from "../SupportType";
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
          supportType: [] as string[],
        } as Values
      }
    >
      {SupportType()}
    </MultiStepFormWrapper>
  );
};

describe("<SupportType />", () => {
  it("should render two options", () => {
    render(setup());

    expect(
      screen.getByRole("checkbox", {
        name: /acolhimento psicológico/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", {
        name: /acolhimento jurídico/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render an error if no option is selected", async () => {
    render(setup());

    const btn = screen.getByRole("button", { name: /enviar/i });
    await userEvent.click(btn);

    await screen.findByRole("alert");

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Esse campo é obrigatório.",
    );
  });
});
