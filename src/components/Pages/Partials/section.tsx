import React from "react";
import { projects } from "../DataMapPages/projectsData";

const Section = () => {
	return (
		<div className="flex flex-wrap my-40 text-gray-600 font-montserrat body-font">
			{projects.map((project) => (
				<div className="container px-5 py-10 mx-auto lg:w-1/3" key={project.id}>
					<div className="flex flex-wrap mb-2 ">
						<div className="mb-0 lg:mb-0">
							<h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
								{project.name}
							</h1>
							<div className="w-20 h-1 rounded bg-sky-500" />
						</div>
						<div className="flex flex-wrap">
							<div className="p-0">
								<div className="p-6 bg-gray-100 rounded-lg shadow-lg">
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
									<h3 className="mb-4 text-xs font-bold tracking-widest text-gray-500 title-font">
										{project.description}
									</h3>
									<p className="text-base leading-relaxed">{project.detail}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Section;
