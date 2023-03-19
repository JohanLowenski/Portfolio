import React from "react";
import Photo from "../../Assets/Johan.Lowenski.jpg";

const ImageProfil = () => {
	return (
		<div className="flex justify-center">
			<img
				className="object-cover object-center w-48 h-48 rounded-full"
				src={Photo}
				alt="Photos"
			/>
		</div>
	);
};

export default ImageProfil;
