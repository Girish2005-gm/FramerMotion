import React, { useState } from "react";
import Background from "./component/Background";
import Foreground from "./component/Forground";
import Newcomp from "./component/Newcomp";

const App = () => {
  const [data, setData] = useState([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
        {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".7mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    }
  ]);

  return (
    <div className="relative w-full h-screen bg-zinc-200">
      <Background />
      <Newcomp data={data} setData={setData} />
      <Foreground data={data} />
    </div>
  );
};

export default App;


