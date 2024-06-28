import { Text } from "@radix-ui/themes";
import { ErrorMessage as FormikErrorMessage } from "formik";
import { PropsWithChildren } from "react";

function CustomErrorMessage({ children }: PropsWithChildren) {
  return (
    <Text role={"alert"} color={"red"} size={"2"} as={"p"}>
      {children}
    </Text>
  );
}

export default function ErrorMessage({ name }: { name: string }) {
  return <FormikErrorMessage name={name} component={CustomErrorMessage} />;
}
