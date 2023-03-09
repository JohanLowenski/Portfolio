import React from "react";
import { projects } from "../DataMapPages/projectsData";

const Section = () => {
	return (
		<figure className="text-gray-600 divide-y divide-gray-200 font-montserrat body-font">
			{projects.map((project) => (
				<div className="container px-5 py-24 mx-auto" key={project.id}>
					<div className="flex flex-wrap w-full mb-2">
						<div className="w-full mb-6 lg:w-1/2 lg:mb-0">
							<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
								{project.name}
							</h1>
							<div className="w-20 h-1 rounded bg-sky-500" />
						</div>
						<div className="flex flex-wrap -m-4">
							<div className="p-4 xl:w-1/4 md:w-1/2">
								<div className="p-6 bg-gray-100 rounded-lg">
									<a
										href={project.https}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="object-cover object-center w-full h-40 mb-6 rounded"
											src={project.image}
											alt="content"
										/>
									</a>

									<h2 className="mb-4 text-lg font-medium text-sky-500 title-font">
										{project.name}
									</h2>
									<h3 className="mb-4 text-xs font-medium tracking-widest text-gray-500 title-font">
										{project.description}
									</h3>
									<p className="text-base leading-relaxed">
										Fingerstache flexitarian street art 8-bit waistcoat.
										Distillery hexagon disrupt edison bulbche. Lorem ipsum dolor
										sit, amet consectetur adipisicing elit. Aspernatur
										voluptatem, doloribus delectus perspiciatis, nostrum
										dolores, iure atque facilis dolor aliquid consequuntur? At,
										maxime minima velit laboriosam sunt nemo. Numquam, tempora?{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</figure>
	);
};
export default Section;
