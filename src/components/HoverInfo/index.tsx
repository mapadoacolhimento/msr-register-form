import React, { useState } from "react";
import "./HoverInfo.css";

interface HoverInfoProps {
	text: string;
	explanation: string;
}

const HoverInfo: React.FC<HoverInfoProps> = ({ text, explanation }) => {
	const [visible, setVisible] = useState(false);

	const handleMouseEnter = () => setVisible(true);
	const handleMouseLeave = () => setVisible(false);

	return (
		<div
			className="info-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{text}
			<img
				src="/illustrations/icon-down.svg"
				className={`arrow ${visible ? "rotated" : ""}`}
				alt="arrow icon"
			/>
			<div className={`explanation ${visible ? "visible" : "hidden"}`}>
				{explanation}
			</div>
		</div>
	);
};

export default HoverInfo;
