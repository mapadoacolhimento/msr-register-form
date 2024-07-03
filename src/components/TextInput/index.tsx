import React, { useState } from "react";
import { Field, FieldProps } from "formik";
import InputMask from "react-input-mask";
import ErrorMessage from "../ErrorMessage";
import "./TextInput.css";

interface TextInputProps {
	name: string;
	type?: string;
	label: string;
	placeholder?: string;
	mask?: string;
}

const TextInput: React.FC<TextInputProps> = ({
	name,
	type = "text",
	label,
	placeholder,
	mask,
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
				{({ field }: FieldProps) =>
					mask ? (
						<InputMask
							{...field}
							id={name}
							type={type}
							placeholder={placeholder}
							mask={mask}
							className="input-field"
							onFocus={() => setIsFocused(true)}
							onBlur={(e) => {
								field.onBlur(e);
								if (!e.target.value) setIsFocused(false);
							}}
						/>
					) : (
						<input
							{...field}
							id={name}
							type={type}
							placeholder={placeholder}
							className="input-field"
							onFocus={(e) => setIsFocused(true)}
							onBlur={(e) => {
								field.onBlur(e);
								if (!e.target.value) setIsFocused(false);
							}}
						/>
					)
				}
			</Field>
			<ErrorMessage name={name} />
		</div>
	);
};

export default TextInput;
