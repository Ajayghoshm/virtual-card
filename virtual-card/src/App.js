import "./App.css";
import "./Input.css";
import "remixicon/fonts/remixicon.css";
import Tab from "./components/Tabs";
import { useEffect, useState } from "react";
import Yours from "./Pages/Yours";
import All from "./Pages/All";
import Blocked from "./Pages/Blocked";
import { MOCKVALUES, TABS, USERS } from "./Pages/constant";
import FilterPop from "./components/FilterComponent";

const renderTabs = (value, cardList, setFilterValue) => {
  switch (value) {
    case "Yours":
      return <Yours cardList={cardList} setFilterValue={setFilterValue} />;
    case "All":
      return <All cardList={cardList} />;
    case "Blocked":
      return <Blocked cardList={cardList} />;
  }
};

function App() {
  let userOptions = USERS.map((item) => {
    return { label: item.name, value: item.id };
  });

  const [activeTabs, setActiveTabs] = useState(TABS[0]);

  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchEnable, setSearchEnable] = useState(false);

  const [filterValue, setFilterValue] = useState({
    selectedUser: "",
    type: {
      subscription: true,
      burner: true,
    },
  });

  useEffect(() => {
    setFilterValue((state) => {
      return {
        selectedUser: "",
        type: "",
      };
    });
  }, [activeTabs]);

  let FilteredCardlist = MOCKVALUES;

  if (
    filterValue?.selectedUser &&
    filterValue?.selectedUser !== userOptions[0]
  ) {
    FilteredCardlist = FilteredCardlist.filter((item) => {
      return item.owner_id === filterValue.selectedUser.value;
    });
  }

  if (filterValue.type.burner === false) {
    FilteredCardlist = FilteredCardlist.filter((item) => {
      return item.card_type !== "burner";
    });
  }
  if (filterValue.type.subscription === false) {
    FilteredCardlist = FilteredCardlist.filter((item) => {
      return item.card_type !== "subscription";
    });
  }

  if (searchInputValue) {
    FilteredCardlist = FilteredCardlist.filter((item) => {
      return item.name.toLowerCase().includes(searchInputValue.toLowerCase());
    });
  }

  const onSearchInputChange = (e) => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="p-8 overflow-auto App">
      <div className="flex justify-between py-6">
        <div className="flex items-center space-x-2">
          <div className="font-bold">Virtual Cards</div>
          <div className="flex items-center px-2 space-x-2 text-center bg-gray-50">
            <i className="text-blue-600 ri-vidicon-line"></i>
            <p className="text-blue-600"> Learn more</p>
          </div>
        </div>
        <div className="flex items-center p-1 text-center border shadow-md cursor-pointer ">
          <i className="ri-add-line"></i>
          <p>Virtual Cards</p>
        </div>
      </div>
      <Tab>
        {TABS.map((item) => {
          return (
            <Tab.item
              key={item}
              label={item}
              active={activeTabs == item}
              onClick={() => setActiveTabs(item)}
            />
          );
        })}
      </Tab>
      <div className="flex items-center justify-end pb-4 space-x-4 ">
        <div>
          {searchEnable && (
            <input
              className="border border-gray-200"
              value={searchInputValue}
              onChange={(e) => onSearchInputChange(e)}
            />
          )}
          {searchEnable ? (
            <i
              className="cursor-pointer ri-close-line"
              onClick={() => setSearchEnable((state) => !state)}
            ></i>
          ) : (
            <i
              className="cursor-pointer ri-search-line"
              onClick={() => setSearchEnable((state) => !state)}
            ></i>
          )}
        </div>
        <div className="flex px-2 space-x-2 ">
          {filterValue?.selectedUser?.label && (
            <div className="px-2 bg-gray-200">
              {filterValue?.selectedUser?.label}
            </div>
          )}
          {filterValue?.type?.burner && (
            <div className="px-2 bg-gray-200">Burner</div>
          )}
          {filterValue?.type?.subscription && (
            <div className="px-2 bg-gray-200">Subscription</div>
          )}
        </div>
        <FilterPop
          setFilterValue={setFilterValue}
          userOptions={userOptions}
          filterValue={filterValue}
        />
      </div>
      <div className="grid grid-cols-2 gap-16">
        {renderTabs(activeTabs, FilteredCardlist, setFilterValue)}
      </div>
    </div>
  );
}

export default App;
