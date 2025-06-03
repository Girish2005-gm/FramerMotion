import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: "-20%" },
  visible: { opacity: 1, scale: 1, y: "0" },
  exit: { opacity: 0, scale: 0.8, y: "20%" },
};

const Newcomp = ({ data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [desc, setDesc] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [close, setClose] = useState(true);
  const [tagTitle, setTagTitle] = useState("Download Now");
  const [tagColor, setTagColor] = useState("green");
  const [tagIsOpen, setTagIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      desc,
      fileSize,
      close,
      tag: {
        isOpen: tagIsOpen,
        tagTitle,
        tagColor,
      },
    };

    setData([...data, newCard]);

    setDesc("");
    setFileSize("");
    setClose(true);
    setTagTitle("Download Now");
    setTagColor("green");
    setTagIsOpen(true);
    setShowForm(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setShowForm(true)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "absolute",
          zIndex: 9999,
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "12px 20px",
          borderRadius: "12px",
          cursor: "pointer",
          right: "20px",
          top: "20px",
          fontWeight: "600",
          border: "none",
          outline: "none",
          userSelect: "none",
          boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
          fontSize: "16px",
        }}
        aria-label="Add New Card"
      >
        Add New Card
      </motion.button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setShowForm(false)}
          >
            <motion.form
              className="bg-white rounded-2xl shadow-xl w-[600px] max-w-full p-8 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-extrabold mb-6 text-gray-900 select-none">
                Add New Card
              </h2>

              {/* Input fields */}
              <label className="block mb-5">
                <span className="text-gray-700 font-semibold mb-1 block">
                  Description
                </span>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Enter description"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </label>

              <label className="block mb-5">
                <span className="text-gray-700 font-semibold mb-1 block">
                  File Size
                </span>
                <input
                  type="text"
                  value={fileSize}
                  onChange={(e) => setFileSize(e.target.value)}
                  placeholder="e.g. 1.2MB"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </label>

              <label className="block mb-5">
                <span className="text-gray-700 font-semibold mb-1 block">
                  Close Button Shown?
                </span>
                <select
                  value={close}
                  onChange={(e) => setClose(e.target.value === "true")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>

              <label className="block mb-5">
                <span className="text-gray-700 font-semibold mb-1 block">
                  Tag Title
                </span>
                <input
                  type="text"
                  value={tagTitle}
                  onChange={(e) => setTagTitle(e.target.value)}
                  placeholder="Tag button text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </label>

              <label className="block mb-5">
                <span className="text-gray-700 font-semibold mb-1 block">
                  Tag Color
                </span>
                <select
                  value={tagColor}
                  onChange={(e) => setTagColor(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </select>
              </label>

              <label className="block mb-8">
                <span className="text-gray-700 font-semibold mb-1 block">
                  Tag Visible?
                </span>
                <select
                  value={tagIsOpen}
                  onChange={(e) => setTagIsOpen(e.target.value === "true")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-lg bg-gray-300 font-semibold text-gray-800 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Newcomp;
