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
  limit,
}) => {
  return (
    <div className="p-4 space-y-2 border border-gray-100 shadow-md drop-shadow-2xl">
      <div className="text-lg text-left">{heading}</div>
      <div className="flex items-center space-x-1 text-center">
        <div>{personName}</div>
        <i className="text-xs text-gray-400 ri-checkbox-blank-circle-fill"></i>
        <div>{jobPost}</div>
      </div>
      <div className="flex justify-between ">
        {type === "burner" ? (
          <div className="px-2 text-gray-500 border border-gray-300 rounded-sm">
            Burner
          </div>
        ) : (
          <div className="px-2 text-gray-500 border border-gray-300 rounded-sm">
            Subscription
          </div>
        )}
        {type === "burner" ? (
          <div>{`Expires: ${expireDate}`}</div>
        ) : (
          <div>{`August Limit:${limit}`}</div>
        )}
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
