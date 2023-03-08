import React from "react";
import Fisheye from "../../Assets/Fisheye.png";
import Hrnet from "../../Assets/Hrnet.png";
import GameOn from "../../Assets/Gameon.png";
import Booki from "../../Assets/Booki.png";
import OhMyFood from "../../Assets/Ohmyfood.png";
import Plats from "../../Assets/LesPetitsPlats.png";
import Kasa from "../../Assets/Kasa.png";
import Billed from "../../Assets/Billed.png";

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
		image: GameOn,
		description: "Site d'inscription à des tournois de jeux vidéos",
		https: "https://gameon-website.lowenski-johan.fr/",
	},
	{
		id: 4,
		name: "Booki",
		image: Booki,
		description: "Site de réservation d'hotels Marseillais",
		https: "https://booki.lowenski-johan.fr/",
	},
	{
		id: 5,
		name: "Ohmyfood",
		image: OhMyFood,
		description: "Site de réservation dans des restaurants",
		https: "https://ohmyfood.lowenski-johan.fr/",
	},
	{
		id: 6,
		name: "les-petits-plats",
		image: Plats,
		description: "Site de recettes de cuisine",
		https: "https://les-petits-plats.lowenski-johan.fr/",
	},
	{
		id: 7,
		name: "Kasa",
		image: Kasa,
		description: "Site de réservation d'hotels Parisiens",
		https: "https://kasa.lowenski-johan.fr/",
	},
	{
		id: 8,
		name: "Billed",
		image: Billed,
		description: "Site de gestion d’employés",
		https: "https://billed-app.lowenski-johan.fr/",
	},
];

const Section = () => {
	return (
		<figure className="divide-y divide-gray-200 font-montserrat">
			{projects.map((project) => (
				<figcaption key={project.id} className="flex py-4">
					<a href={project.https} target="_blank" rel="noopener noreferrer">
						<img
							className="object-cover w-10 h-10 rounded-full md:h-auto md:w-20"
							src={project.image}
							alt={project.image}
						/>
					</a>
					<blockquote className="ml-3">
						<p className="text-sky-500 dark:text-sky-400">{project.name}</p>
						<p className="text-sm text-gray-500">{project.description}</p>
					</blockquote>
				</figcaption>
			))}
		</figure>
	);
};
export default Section;
