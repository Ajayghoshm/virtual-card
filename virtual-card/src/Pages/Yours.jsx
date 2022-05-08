import React from "react";
import Cards from "../components/Cards";
import { USERS } from "./constant";

const Yours = ({ cardList }) => {
  let userID = 1;
  let userName = USERS.find((item) => {
    return item.id === userID;
  });
  let filteredMockValues = cardList.filter((item) => {
    return item.owner_id === userID;
  });
  return (
    <>
      {filteredMockValues.map((item, index) => {
        return (
          <div>
            <Cards
              availableAmount={item.available_to_spend}
              expireDate={item.expiry}
              heading={item.name}
              jobPost={item.budget_name}
              personName={userName.name}
              spentAmount={item.spent}
              type={item.card_type}
              key={item.index}
              limit={item.limit}
            />
          </div>
        );
      })}
    </>
  );
};

export default Yours;
