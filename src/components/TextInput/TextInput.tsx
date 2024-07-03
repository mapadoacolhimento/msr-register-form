import React, { useState } from "react";
import { Field, FieldProps } from "formik";
import ErrorMessage from "../ErrorMessage";
import "./TextInput.css";

interface TextInputProps {
	name: string;
	type?: string;
	label: string;
	placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
	name,
	type = "text",
	label,
	placeholder,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className="input-container">
			<label
				htmlFor={name}
				className={isFocused ? "floating-label active" : "floating-label"}
			>
				{label}
			</label>
			<Field name={name}>
				{({ field }: FieldProps) => (
					<input
						{...field}
						type={type}
						id={name}
						className="input-field"
						placeholder={placeholder}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => {
							if (!e.target.value) setIsFocused(false);
						}}
					/>
				)}
			</Field>
			<ErrorMessage name={name} />
		</div>
	);
};

export default TextInput;
