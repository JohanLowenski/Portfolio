import React from "react";
import Footer from "./footer";
import Section from "./section";

const header = () => {
	return (
		<div>
			<header className="font-bold text-center font-montserrat text-sky-500 dark:text-sky-400">
				<h1>Johan Lowenski</h1>
			</header>
			<Section />
			<Footer />
		</div>
	);
};

export default header;
