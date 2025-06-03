import React, { useRef } from "react";
import Card from "./Card";

const Foreground = ({ data }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="fixed z-[3] left-0 top-0 w-full h-full flex flex-wrap gap-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
