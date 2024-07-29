import {
	type PropsWithChildren,
	ReactElement,
	useState,
	Children,
} from "react";
import { type FormikHelpers, Form, Formik } from "formik";
import { Box, Flex, Heading, IconButton } from "@radix-ui/themes";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import StepsController from "./StepsController";
import { DesktopIllustration } from "../";
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
		<>
			<Formik
				initialValues={snapshot}
				onSubmit={handleSubmit}
				validationSchema={step.props.validationSchema}
			>
				{({ isSubmitting, values }) => (
					<Box px={"5"} asChild>
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

							<Heading
								as={"h1"}
								size={"8"}
								color={"purple"}
								highContrast
								align={"center"}
							>
								{step.props.title}
							</Heading>

							<Flex
								direction={"column"}
								align={"center"}
								justify={"center"}
								gapY={"4"}
							>
								{step}
							</Flex>

							<StepsController
								stepName={step.props.title}
								stepNumber={stepNumber}
								isButtonDisabled={isSubmitting}
								progress={progress}
								isLastStep={isLastStep}
								img={step.props.img}
							/>
						</Form>
					</Box>
				)}
			</Formik>
			<DesktopIllustration img={step.props.img} />
		</>
	);
}
