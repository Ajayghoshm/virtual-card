import classNames from "classnames";
import React from "react";

const ProgressBar = ({ width = 50 }) => {
  return (
    <div className="h-3 w-full bg-green-400 flex rounded-md">
      <div
        className={classNames(["bg-red-500 rounded-md"])}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
