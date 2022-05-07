import React from "react";
import ProgressBar from "./ProgressBar";

const Cards = ({ children }) => {
  return (
    <div className="border shadow-md drop-shadow-2xl border-gray-100 p-2">
      <div className="text-lg text-left">MixMax</div>
      <div className="flex">
        <div>Vishal</div>
        <div>Software Subscription</div>
      </div>
      <div className="flex justify-between">
        <div>Burner</div>
        <div>Expires:{}</div>
      </div>
      <ProgressBar />
      <div className="flex justify-between">
        <div>spent</div>
        <div>148 SGD</div>
      </div>
      <div className="flex justify-between">
        <div>Available to spend</div>
        <div>148 SGD</div>
      </div>
    </div>
  );
};

export default Cards;
