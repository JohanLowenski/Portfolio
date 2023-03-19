import React from "react";
import Header from "./components/Pages/Partials/header";
import Section from "./components/Pages/Partials/section";
import Footer from "./components/Pages/Partials/footer";
import Photo from "./components/Pages/Partials/photo";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Photo />
			<Section />
			<Footer />
		</div>
	);
};

export default App;
