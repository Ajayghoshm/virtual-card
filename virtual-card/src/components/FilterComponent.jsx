import React, { useEffect, useState } from "react";
import PopOver from "./ReactPopper";
import Select from "react-select";
import { USERS } from "../Pages/constant";

const FilterPop = ({ setFilterValue, userOptions, filterValue }) => {
  const [selectedUser, setSelectedUser] = useState(filterValue.selectedUser);
  const [filterCardType, setFilterCardtype] = useState(filterValue.type);

  const onSubmit = () => {
    setFilterValue({ selectedUser: selectedUser, type: filterCardType });
  };

  const onBurnerChange = () => {
    setFilterCardtype((state) => {
      return { ...state, burner: !state.burner };
    });
  };

  const onSubscriptionChange = () => {
    setFilterCardtype((state) => {
      return { ...state, subscription: !state.subscription };
    });
  };

  return (
    <PopOver
      ReferenceComponent={
        <div className="p-2 cursor-pointer bg-gray-50">
          <i className="ri-filter-3-line" />
          Filters
        </div>
      }
    >
      {(onMouseLeaveFunction) => (
        <div className="p-2 bg-white border border-gray-200 shadow w-96">
          <div>
            <div className="flex justify-start py-4 border-b border-gray-200">
              Filters
            </div>
            <div className="p-2">
              <div className="p-2">
                <p className="text-left">Type</p>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={filterCardType.subscription}
                        onChange={onSubscriptionChange}
                      />
                    </div>
                    <p>Subscription</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={filterCardType.burner}
                        onChange={onBurnerChange}
                      />
                    </div>
                    <p>Burner</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-2 ">
                  <p className="text-left">Cardholder</p>
                  <Select
                    options={userOptions}
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e)}
                  />
                </div>
              </div>
              <div className="flex justify-between p-2">
                <div
                  className="px-4 py-2 text-white bg-pink-500 rounded-sm cursor-pointer"
                  onClick={() => {
                    onSubmit();
                    onMouseLeaveFunction();
                  }}
                >
                  Apply
                </div>
                <div
                  className="px-4 py-2 bg-gray-200 rounded-sm cursor-pointer "
                  onClick={() => {
                    onMouseLeaveFunction();
                  }}
                >
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PopOver>
  );
};

export default FilterPop;
