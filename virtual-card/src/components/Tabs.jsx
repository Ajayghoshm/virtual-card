import React from "react";
import classnames from "classnames";

const Tab = ({ children }) => {
  return (
    <div className="flex space-x-3 cursor-pointer w-full border-b mb-6 ">
      {children}
    </div>
  );
};

const Item = ({ children, label, onClick, active, ...props }) => {
  return (
    <div>
      <div
        className={classnames(["font-semibold"], {
          "border-b border-red-500": active,
        })}
        onClick={onClick}
        {...props}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
};

Tab.item = Item;

export default Tab;
