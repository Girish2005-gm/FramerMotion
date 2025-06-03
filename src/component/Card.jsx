import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
	return (
		<>
			<motion.div
				drag
				dragConstraints={reference}
				whileDrag={{ scale: 1.2 }}
				dragElastic={0.2}
				className="relative flex-shrink-0 px-8 py-8 overflow-hidden shadow-lg text-zinc-700 h-60 w-52 bg-zinc-100 rounded-3xl"
			>
				<FaRegFileAlt />
				<p className="mt-5 text-sm font-semibold leading-tight">{data.desc}</p>
				{/* footer */}
				<div className="absolute bottom-0 left-0 w-full ">
					<div className="flex items-center justify-between px-8 py-2 mb-3">
						<h5>{data.fileSize}</h5>
						<span className="flex items-center justify-center text-white rounded-full h-7 w-7 bg-zinc-800">
							{data.close ? <IoClose /> : <LuDownload className="w-4 h-4 " />}
						</span>
					</div>
					{data.tag.isOpen && (
						<div
							className={`flex items-center justify-center w-full py-3 ${
								data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
							} `}
						>
							<h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
						</div>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default Card;