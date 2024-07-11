import React, { useState } from "react";
import { useField } from "formik";
import "./SelectInput.css";
import ErrorMessage from "../ErrorMessage";

interface SelectInputProps {
	name: string;
	label: string;
	options: { value: string; label: string }[];
	placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
	const [field, meta, helpers] = useField(props.name);
	const [isActive, setIsActive] = useState(false);
	const hasError = meta.touched && meta.error;

	function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
		helpers.setValue(e.target.value);
		setIsActive(true);
	}

	function handleFocus() {
		setIsActive(true);
	}

	function handleBlur() {
		setIsActive(field.value !== "");
	}

	return (
		<div className="input-container">
			<label
				htmlFor={props.name}
				className={isActive ? "active" : ""}
				style={{ outlineColor: isActive ? "var(--red-9)" : "var(--purple-9)" }}
			>
				{props.label}
			</label>
			<select
				id={props.name}
				name={props.name}
				value={field.value}
				onChange={handleSelectChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				aria-invalid={hasError ? "true" : "false"}
				className={`${hasError ? "error" : ""}`}
				style={{ color: hasError ? "var(--red-9)" : "var(--purple-9)" }}
			>
				<option value="" disabled selected>
					{props.placeholder}
				</option>

				{props.options.map((option: any) => (
					<option
						key={option.value}
						value={option.value}
						className={option.value === "" ? "placeholder" : ""}
					>
						{option.label}
					</option>
				))}
			</select>
			<ErrorMessage name={props.name} />
		</div>
	);
};

export default SelectInput;
