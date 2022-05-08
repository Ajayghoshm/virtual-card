import classNames from "classnames";
import React from "react";

const ProgressBar = ({ percentageCalculation }) => {
  console.debug("perce", percentageCalculation);
  let width = percentageCalculation;
  return (
    <div className="flex w-full h-3 bg-green-400 rounded-md">
      <div
        className={classNames(["bg-red-500 rounded-md"])}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
