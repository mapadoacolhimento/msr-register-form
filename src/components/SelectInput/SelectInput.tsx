import React, { useState } from "react";
import { useField } from "formik";
import "./SelectInput.css";

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
				htmlFor={name}
				className={isActive ? "active" : ""}
				style={{ outlineColor: isActive ? "var(--red-9)" : "var(--purple-9)" }}
			>
				{label}
			</label>
			<select
				id={name}
				name={name}
				value={field.value}
				onChange={handleSelectChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				aria-invalid={hasError ? "true" : "false"}
				className={`${hasError ? "error" : ""}`}
				style={{ color: hasError ? "var(--red-9)" : "var(--purple-9)" }}
			>
				<option value="" disabled selected>
					{placeholder}
				</option>

				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className={option.value === "" ? "placeholder" : ""}
					>
						{option.label}
					</option>
				))}
			</select>
			{hasError && <div className="input-feedback">{meta.error}</div>}
		</div>
	);
};

export default SelectInput;
