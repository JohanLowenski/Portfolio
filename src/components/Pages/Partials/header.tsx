import React from "react";

const header = () => {
	return (
		<div>
			<header className="flex flex-wrap items-center justify-around mt-10 font-bold dark:text-sky-500 ">
				<h1 className="flex items-center justify-center w-24 h-24 text-3xl text-white rounded-full bg-sky-500 font-pinyon">
					J.L
				</h1>
				<a
					href="/CV_JOHAN_LOWENSKI.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button
						className="flex-shrink-0 px-8 py-2 text-lg text-white border-0 rounded bg-sky-500 focus:outline-none hover:bg-sky-600 sm:mt-0"
						type="button"
					>
						Mon CV
					</button>
				</a>
			</header>
		</div>
	);
};

export default header;
