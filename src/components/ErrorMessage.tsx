import { type PropsWithChildren } from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";
import { Text } from "@radix-ui/themes";

function CustomErrorMessage({ children }: PropsWithChildren) {
  return (
    <Text role={"alert"} color={"red"} size={"2"} as={"p"}>
      {children}
    </Text>
  );
}

export default function ErrorMessage({ name }: Readonly<{ name: string }>) {
  return <FormikErrorMessage name={name} component={CustomErrorMessage} />;
}
