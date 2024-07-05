import { useField } from "formik";
import ErrorMessage from "../ErrorMessage";

type RadioOption = {
	value: string;
	name: string;
};

type RadioInputProps = {
	name: string;
	options: RadioOption[];
};

export default function RadioInput({ options, ...props }: RadioInputProps) {
	const [field, meta, helpers] = useField(props.name);

	return (
		<fieldset>
			{options.map((option: RadioOption) => {
				return (
					<div key={option.value}>
						<input
							{...field}
							type="radio"
							name={props.name}
							id={props.name}
							value={option.value}
						/>
						<label htmlFor={props.name}>{option.name}</label>
					</div>
				);
			})}
			<ErrorMessage name={props.name} />
		</fieldset>
	);
}
