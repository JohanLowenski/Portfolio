import React from "react";
import Footer from "./footer";
import Section from "./section";

const header = () => {
	return (
		<div>
			<header
				className="m-8 font-bold text-center font-montserrat text-sky-500 dark:text-sky-400 text-7xl"
			>
				<h1>Johan Lowenski</h1>
			</header>
			<Section />
			<Footer />
		</div>
	);
};

export default header;
