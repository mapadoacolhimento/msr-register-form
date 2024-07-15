import React, { ForwardedRef, useState } from "react";
import { useField } from "formik";
import * as Select from "@radix-ui/react-select";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./SelectInput.css";
import ErrorMessage from "../ErrorMessage";

interface SelectInputProps {
	name: string;
	label: string;
	options: { value: string; label: string }[];
	placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
	name,
	label,
	options,
	placeholder,
}) => {
	const [field, meta, helpers] = useField(name);
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(field.value !== "");
	};

	const handleValueChange = (value: string) => {
		helpers.setValue(value);
		setIsFocused(true);
	};

	return (
		<div className="select-input-container">
			<label className={isFocused || field.value ? "active" : ""}>
				{label}
			</label>
			<Select.Root onValueChange={handleValueChange}>
				<Select.Trigger
					className="SelectTrigger"
					onFocus={handleFocus}
					onBlur={handleBlur}
					aria-label={label}
				>
					<Select.Value className="placeholder" placeholder={placeholder} />
					<Select.Icon className="SelectIcon">
						<ChevronDownIcon />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content className="SelectContent">
						<Select.ScrollUpButton className="SelectScrollButton">
							<ChevronUpIcon />
						</Select.ScrollUpButton>
						<Select.Viewport className="SelectViewport">
							<Select.Group>
								{options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</Select.Group>
						</Select.Viewport>
						<Select.ScrollDownButton className="SelectScrollButton">
							<ChevronDownIcon />
						</Select.ScrollDownButton>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
			<ErrorMessage name={name} />
		</div>
	);
};

type SelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item> & {
	children: React.ReactNode;
	className?: string;
};

const SelectItem = React.forwardRef(
	(
		{ children, className, ...props }: SelectItemProps,
		forwardedRef: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<Select.Item {...props} ref={forwardedRef}>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className="SelectItemIndicator">
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	}
);

SelectItem.displayName = "SelectItem";
SelectInput.displayName = "SelectInput";

export default SelectInput;
