import React from "react";
import Cards from "../components/Cards";
import ProgressBar from "../components/ProgressBar";
import { MOCKVALUES } from "./constant";

const Yours = () => {
  return (
    <div className=" grid grid-flow-col grid-rows-2 gap-20 ">
      {MOCKVALUES.map((item, index) => {
        return (
          <Cards
            availableAmount={item.available_to_spend}
            expireDate={item.expiry}
            heading={item.name}
            jobPost={item.budget_name}
            personName={item.owner_id}
            spentAmount={item.spent}
            type={item.card_type}
            key={item.index}
          />
        );
      })}
    </div>
  );
};

export default Yours;
