import React, { useState } from "react";
import "./HoverInfo.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface HoverInfoProps {
	title: string;
	description: string;
}

const HoverInfo: React.FC<HoverInfoProps> = ({ title, description }) => {
	const [visible, setVisible] = useState(false);

	const handleMouseEnter = () => setVisible(true);
	const handleMouseLeave = () => setVisible(false);

	return (
		<div
			className="info-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{title}
			<ChevronDownIcon className={`arrow ${visible ? "rotated" : ""}`} />
			<div className={`description ${visible ? "visible" : "hidden"}`}>
				{description}
			</div>
		</div>
	);
};

export default HoverInfo;
