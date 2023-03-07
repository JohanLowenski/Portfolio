import React from "react";
import Fisheye from "../../Assets/Fisheye.png";
import Hrnet from "../../Assets/Hrnet.png";
import GameOn from "../../Assets/Gameon.png";
import Booki from "../../Assets/Booki.png";

// interface Projects {
// 	name?: string;
// 	image?: string;
// 	https?: string;
// }
const projects = [
	{
		id: 1,
		name: "Fisheye",
		image: Fisheye,
		description: "Site de photographes",
		https: "https://front-end-fisheye.lowenski-johan.fr/",
	},
	{
		id: 2,
		name: "Hrnet",
		image: Hrnet,
		description: "Ajout d'employés dans un tableau",
		https: "https://hrnet.lowenski-johan.fr/",
	},
	{
		id: 3,
		name: "Game On",
		image:GameOn,
		description: "Site d'inscription à des tournois de jeux vidéos",
		https: "https://gameon-website.lowenski-johan.fr/",
	},
	{
		id: 4,
		name: "Booki",
		image:Booki,
		description: "Site de réservation d'hotels",
		https: "https://booki.lowenski-johan.fr/",
	},
];

const Section = () => {
	return (
		<ul className="divide-y divide-gray-200">
			{projects.map((project) => (
				<li key={project.id} className="flex py-4">
					<a href={project.https} target="_blank" rel="noopener noreferrer">
						<img
							className="w-10 h-10 rounded-full"
							src={project.image}
							alt=""
						/>
					</a>
					<div className="ml-3">
						<p className="text-sky-500 dark:text-sky-400">{project.name}</p>
						<p className="text-sm text-gray-500">{project.description}</p>
					</div>
				</li>
			))}
		</ul>
	);
};
export default Section;
