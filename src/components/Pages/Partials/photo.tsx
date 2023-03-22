import React from "react";
import Photo from "../../Assets/Johan.Lowenski.png";

const ImageProfil = () => {
	return (
		<div className="flex flex-col items-center mt-40">
			<img
				className="object-cover object-center w-64 h-64 rounded-full"
				src={Photo}
				alt="Photos"
			/>
			<h2 className="mt-10 font-bold text-gray-900 sm-1xl">JOHAN LOWENSKI</h2>
			<div className="flex flex-col items-center">
				<h1 className="mt-10 text-5xl font-bold text-center text-gray-900 title-font">
					Développeur Front-End React
				</h1>
				<p className="mt-8 text-lg text-center text-gray-500">
					Je suis passionné par le développement et l'informatique en général.
					Contactez-moi pour plus d'informations.
				</p>
			</div>
		</div>
	);
};

export default ImageProfil;
