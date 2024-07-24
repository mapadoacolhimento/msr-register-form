import { useField } from "formik";
import { Box, Card, Flex, Text } from "@radix-ui/themes";

import ErrorMessage from "../ErrorMessage";
import "./RadioInput.css";

type RadioOption = {
	value: string;
	name: string;
};

type RadioInputProps = {
	name: string;
	options: RadioOption[];
};

export default function RadioInput({
	options,
	name,
}: Readonly<RadioInputProps>) {
	const [field, _meta, helpers] = useField(name);

	function handleClick(value: string) {
		helpers.setValue(value);
	}

	return (
		<div
			role="radiogroup"
			aria-labelledby={"question"}
			id={`radio-group-${name}`}
		>
			<Flex gap={"4"} direction={"column"}>
				{options.map((option: RadioOption, i) => {
					return (
						<Card asChild key={option.value} className={"radio"}>
							<Box
								role={"radio"}
								aria-checked={field.value === option.value}
								tabIndex={0}
								aria-labelledby={`radio-label-${i}`}
								data-value={option.value}
								onClick={() => handleClick(option.value)}
							>
								<Text asChild size={"2"} weight={"medium"}>
									<label id={`radio-label-${i}`}>{option.name}</label>
								</Text>
							</Box>
						</Card>
					);
				})}
			</Flex>
			<ErrorMessage name={name} />
		</div>
	);
}
