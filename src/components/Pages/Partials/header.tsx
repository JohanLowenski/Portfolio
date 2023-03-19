import React from "react";

const header = () => {
	return (
		<div>
			<header className="flex items-center justify-around font-bold text-center bg-white font-montserrat text-sky-500 dark:text-sky-500 text-7xl">
				<h1 className="">J.L</h1>
				<button
					className="flex-shrink-0 px-8 py-2 mt-10 text-lg text-white border-0 rounded bg-sky-500 focus:outline-none hover:bg-sky-600 sm:mt-0"
					type="button"
				>
					Mon CV
				</button>
			</header>
		</div>
	);
};

export default header;
