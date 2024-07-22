import { Checkbox, Box, Flex, Text } from "@radix-ui/themes";
import { useField } from "formik";
import "./CheckboxInfo.css";
import ErrorMessage from "../ErrorMessage";

interface CheckBoxInfoProps {
	name: string;
	children: React.ReactNode;
}

const CheckboxInfo: React.FC<CheckBoxInfoProps> = ({ name, children }) => {
	const [field, meta, helpers] = useField(name);

	const handleCheckedChange = (checked: boolean) => {
		helpers.setValue(checked === true);
	};

	return (
		<div className="checkboxInfoContainer">
			<Flex align="center">
				<Checkbox
					className="checkboxInfoRoot"
					id={name}
					checked={field.value}
					onCheckedChange={handleCheckedChange}
					color="purple"
				/>
				<Text className="infoLabel" htmlFor={name}>
					{children}
				</Text>
			</Flex>
			<ErrorMessage name={name} />
		</div>
	);
};

export default CheckboxInfo;
