import React from "react";
import ProgressBar from "./ProgressBar";

const Cards = ({
  heading,
  personName,
  jobPost,
  type,
  expireDate,
  spentAmount,
  availableAmount,
}) => {
  return (
    <div className="border shadow-md drop-shadow-2xl border-gray-100 p-4 space-y-2">
      <div className="text-lg text-left">{heading}</div>
      <div className="flex items-center">
        <div>{personName}</div>
        <i className="ri-checkbox-blank-circle-fill text-gray-400 text-xs"></i>
        <div>{jobPost}</div>
      </div>
      <div className="flex justify-between">
        {type === "Burner" ? <div>Burner</div> : <div>Burner</div>}
        <div>Expires:{expireDate}</div>
      </div>
      <ProgressBar />
      <div className="flex justify-between">
        <div>spent</div>
        <div>
          {spentAmount.value} {spentAmount.currency}
        </div>
      </div>
      <div className="flex justify-between">
        <div>Available to spend</div>
        <div>
          {availableAmount?.value}
          {availableAmount?.currency}
        </div>
      </div>
    </div>
  );
};

export default Cards;
