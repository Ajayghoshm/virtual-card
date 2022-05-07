import React from "react";
import Cards from "../components/Cards";
import ProgressBar from "../components/ProgressBar";

const Yours = () => {
  return (
    <div className=" grid grid-flow-col col-span-2  space-x-2">
      <Cards />
      <Cards />
    </div>
  );
};

export default Yours;
