import MultiStepFormWrapper from "./MultiStepFormWrapper";
import {
  BasicRegisterInformation,
  AcceptsOnlineSupport,
  SupportType,
} from "./Steps";
import { sleep } from "../../utils";

export interface Values {
  email: string;
  acceptsOnlineSupport: string;
  supportType: string[];
}

export default function MultiStepForm() {
  return (
    <MultiStepFormWrapper
      initialValues={{
        email: "",
        acceptsOnlineSupport: "",
        supportType: [],
      }}
      onSubmit={async (values: Values) =>
        sleep(300).then(() => console.log("Wizard submit", values))
      }
    >
      {BasicRegisterInformation()}
      {AcceptsOnlineSupport()}
      {SupportType()}
    </MultiStepFormWrapper>
  );
}
