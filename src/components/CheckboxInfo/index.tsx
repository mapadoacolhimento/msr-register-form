import React, { useEffect } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useField, useFormikContext } from "formik";
import "./CheckboxInfo.css";
import ErrorMessage from "../ErrorMessage";

interface CheckBoxInfoProps {
	name: string;
	info: string;
}

const CheckboxInfo: React.FC<CheckBoxInfoProps> = ({ name, info }) => {
	const [field, meta, helpers] = useField(name);

	const handleCheckedChange = (checked: boolean) => {
		helpers.setValue(checked === true);
	};

	return (
		<div className="checkboxInfoContainer">
			<div className="checkboxInfoBox">
				<Checkbox.Root
					className="checkboxInfoRoot"
					onCheckedChange={handleCheckedChange}
					id={name}
				>
					<Checkbox.Indicator className="CheckboxIndicator">
						<CheckIcon />
					</Checkbox.Indicator>
				</Checkbox.Root>
				<label className="infoLabel" htmlFor={name}>
					<span dangerouslySetInnerHTML={{ __html: info }} />
				</label>
			</div>
			<ErrorMessage name={name} />
		</div>
	);
};

export default CheckboxInfo;
