import { useField } from "formik";
import { Box, CheckboxCards, Text } from "@radix-ui/themes";

import ErrorMessage from "../ErrorMessage";
import "./CheckboxInput.css";

type CheckboxOption = {
	value: string;
	name: string;
};

type CheckboxInputProps = {
	name: string;
	options: CheckboxOption[];
};

export default function CheckboxInput({
	options,
	name,
}: Readonly<CheckboxInputProps>) {
	const [field, _meta, helpers] = useField({
		name,
		type: "checkbox",
		multiple: true,
	});

	function handleClick(oldValues: string[], newValue: string) {
		if (oldValues.includes(newValue)) {
			const newFilteredValues = oldValues.filter(
				(oldValue: string) => oldValue !== newValue
			);
			return helpers.setValue(newFilteredValues);
		}

		helpers.setValue([...oldValues, newValue]);
	}

	return (
		<CheckboxCards.Root
			defaultValue={field.value}
			columns={"1"}
			aria-labelledby={"question"}
			id={`checkbox-group-${name}`}
			color={"purple"}
		>
			{options.map((option: CheckboxOption, i) => {
				return (
					<CheckboxCards.Item
						key={option.value}
						onClick={() => handleClick(field.value, option.value)}
						value={option.value}
						className={field.value.includes(option.value) ? "is-checked" : ""}
					>
						<Text>{option.name}</Text>
					</CheckboxCards.Item>
				);
			})}
			<ErrorMessage name={name} />
		</CheckboxCards.Root>
	);
}
