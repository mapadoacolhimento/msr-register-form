import {
	type PropsWithChildren,
	ReactElement,
	useState,
	Children,
} from "react";
import { type FormikHelpers, Form, Formik } from "formik";
import { Grid, Heading, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import StepsController from "./StepsController";
import { DesktopIllustration, Header } from "../";
import { type StepChildrenProps } from "./Step";
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
		<Grid columns={{ initial: "1", md: "1fr 55%" }} width="auto">
			<div>
				<Header />
				<main>
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
									type={"button"}
								>
									<ChevronLeftIcon width="24" height="24" />
									<VisuallyHidden.Root>
										Voltar para o passo anterior
									</VisuallyHidden.Root>
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
									img={step.props.img}
								/>
							</Form>
						)}
					</Formik>
				</main>
			</div>
			<DesktopIllustration img={step.props.img} />
		</Grid>
	);
}
