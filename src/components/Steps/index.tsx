import { PropsWithChildren } from "react";
import { type FormikHelpers } from "formik";
import { AnyObjectSchema } from "yup";
import { type Values } from "../MultiStepForm";

export type WizardStepChildrenProps = {
  onSubmit: (values: Values, bag: FormikHelpers<Values>) => Promise<void>;
  validationSchema: AnyObjectSchema;
  title: string;
  subtitle?: string;
};

export default function WizardStep({
  children,
}: PropsWithChildren<WizardStepChildrenProps>) {
  return children;
}

export { default as BasicRegisterInformation } from "./BasicRegisterInformation";
export { default as AcceptsOnlineSupport } from "./AcceptsOnlineSupport";
export { default as SupportType } from "./SupportType";
