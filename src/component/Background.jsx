import React from "react";

const Background = () => {
	return (
		<>
			<div className="fixed w-full h-screen z-[2]">
				<div className="w-full py-10 absolute top-[5%] flex justify-center text-zinc-700 font-semibold text-xl">
					Documents.
				</div>
				<h1 className="text-[14vw] leading-none  tracking-tight absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-700">
					Docs.
				</h1>
			</div>
		</>
	);
};

export default Background;