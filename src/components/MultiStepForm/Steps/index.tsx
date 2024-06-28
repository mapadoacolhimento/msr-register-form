import { PropsWithChildren } from "react";
import { type FormikHelpers } from "formik";
import { AnyObjectSchema } from "yup";

import { type Values } from "../";

export interface StepChildrenProps {
  onSubmit: (values: Values, bag: FormikHelpers<Values>) => Promise<void>;
  validationSchema: AnyObjectSchema;
  title: string;
  subtitle?: string;
}

export default function Step({
  children,
}: PropsWithChildren<StepChildrenProps>) {
  return children;
}

export { default as BasicRegisterInformation } from "./BasicRegisterInformation";
export { default as AcceptsOnlineSupport } from "./AcceptsOnlineSupport";
export { default as SupportType } from "./SupportType";
