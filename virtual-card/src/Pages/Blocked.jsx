import React from "react";
import Cards from "../components/Cards";
import { USERS } from "./constant";

const Blocked = ({ cardList }) => {
  let filteredMockValues = cardList.filter((item) => {
    return item.status === "blocked";
  });
  return (
    <>
      {filteredMockValues.map((item, index) => {
        const user = USERS.find((user) => {
          return user.id == item.owner_id;
        });
        return (
          <Cards
            availableAmount={item.available_to_spend}
            expireDate={item.expiry}
            heading={item.name}
            jobPost={item.budget_name}
            personName={user.name}
            spentAmount={item.spent}
            type={item.card_type}
            key={item.index}
            limit={item.limit}
          />
        );
      })}
    </>
  );
};

export default Blocked;
