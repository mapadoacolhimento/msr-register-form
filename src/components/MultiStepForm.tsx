import { ReactElement, useState, PropsWithChildren, Children } from "react";
import { Heading, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { type FormikHelpers, ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import StepsController from "./StepsController";

const firstStepValidation = Yup.object({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("Esse campo é obrigatório."),
});

export interface Values {
  email: string;
}

type WizardProps = {
  initialValues: Values;
  onSubmit: (values: Values, bag: FormikHelpers<Values>) => Promise<void>;
};

type WizardStepChildrenProps = {
  onSubmit: (values: Values, bag: FormikHelpers<Values>) => Promise<void>;
  validationSchema: Yup.AnyObjectSchema;
  title: string;
  subtitle?: string;
};

const WizardStep = ({ children }: PropsWithChildren<WizardStepChildrenProps>) =>
  children;

const Wizard = ({
  children,
  initialValues,
  onSubmit,
}: PropsWithChildren<WizardProps>) => {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepIndex] as ReactElement<WizardStepChildrenProps>;
  const totalSteps = steps.length;
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
          {step.props.subtitle ? <Text>{step.props.subtitle}</Text> : null}

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
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function MultiStepForm() {
  return (
    <Wizard
      initialValues={{
        email: "",
      }}
      onSubmit={async (values: Values) =>
        sleep(300).then(() => console.log("Wizard submit", values))
      }
    >
      <WizardStep
        onSubmit={() => sleep(300).then(() => console.log("Step1 onSubmit"))}
        validationSchema={firstStepValidation}
        title={"Seus dados"}
      >
        <label htmlFor="email">E-mail</label>
        <Field
          name="email"
          placeholder="Qual o seu melhor e-mail?"
          type="email"
        />
        <ErrorMessage name="email" />
      </WizardStep>
      <WizardStep
        onSubmit={() => sleep(300).then(() => console.log("Step2 onSubmit"))}
        validationSchema={firstStepValidation}
        title={"Sobre o acolhimento"}
        subtitle={"Você aceitaria ser atendida online?"}
      >
        <label htmlFor="email">E-mail</label>
        <Field
          name="email"
          placeholder="Qual o seu melhor e-mail?"
          type="email"
        />
        <ErrorMessage name="email" />
      </WizardStep>
      <WizardStep
        onSubmit={() => sleep(300).then(() => console.log("Step3 onSubmit"))}
        validationSchema={firstStepValidation}
        title={"Sobre o acolhimento"}
        subtitle={"Que tipo de acolhimento você precisa?"}
      >
        <label htmlFor="email">E-mail</label>
        <Field
          name="email"
          placeholder="Qual o seu melhor e-mail?"
          type="email"
        />
        <ErrorMessage name="email" />
      </WizardStep>
    </Wizard>
  );
}
