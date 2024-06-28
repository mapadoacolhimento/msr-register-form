import { ReactElement, useState, PropsWithChildren, Children } from "react";
import { Heading, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { type FormikHelpers, Form, Formik } from "formik";

import StepsController from "./StepsController";
import { type StepChildrenProps } from "./Steps";
import { type Values } from "./";

interface MultiStepFormWrapperProps {
  initialValues: Values;
  onSubmit: (values: Values, bag: FormikHelpers<Values>) => Promise<void>;
}

export default function MultiStepFormWrapper({
  children,
  initialValues,
  onSubmit,
}: PropsWithChildren<MultiStepFormWrapperProps>) {
  const [stepIndex, setStepIndex] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const childrenSteps = Children.toArray(children);

  const step = childrenSteps[stepIndex] as ReactElement<StepChildrenProps>;
  const totalSteps = childrenSteps.length;
  const isLastStep = stepIndex === totalSteps - 1;
  const stepNumber = Math.min(stepIndex + 1, totalSteps);
  const progress = (100 * stepNumber) / totalSteps;

  const nextStep = (values: Values) => {
    setSnapshot(values);
    setStepIndex(Math.min(stepIndex + 1, totalSteps - 1));
  };

  const previousStep = (values: Values) => {
    setSnapshot(values);
    setStepIndex(Math.max(stepIndex - 1, 0));
  };

  const handleSubmit = async (values: Values, bag: FormikHelpers<Values>) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }

    if (isLastStep) {
      return onSubmit(values, bag);
    }

    await bag.setTouched({});
    nextStep(values);
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <IconButton
            onClick={() => previousStep(values)}
            variant="ghost"
            disabled={stepIndex === 0}
          >
            <ChevronLeftIcon width="24" height="24" />
          </IconButton>

          <Heading as={"h1"}>{step.props.title}</Heading>
          {step.props.subtitle ? (
            <Text asChild>
              <legend>{step.props.subtitle}</legend>
            </Text>
          ) : null}

          {step}

          <StepsController
            stepName={step.props.title}
            stepNumber={stepNumber}
            isButtonDisabled={isSubmitting}
            progress={progress}
            isLastStep={isLastStep}
          />
        </Form>
      )}
    </Formik>
  );
}
