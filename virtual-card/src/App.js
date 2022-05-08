import "./App.css";
import "./Input.css";
import "remixicon/fonts/remixicon.css";
import Tab from "./components/Tabs";
import { useState } from "react";
import Yours from "./Pages/Yours";
import All from "./Pages/All";
import Blocked from "./Pages/Blocked";
import { MOCKVALUES, TABS } from "./Pages/constant";

const renderTabs = (value, cardList) => {
  switch (value) {
    case "Yours":
      return <Yours cardList={cardList} />;
    case "All":
      return <All cardList={cardList} />;
    case "Blocked":
      return <Blocked cardList={cardList} />;
  }
};

function App() {
  const [activeTabs, setActiveTabs] = useState(TABS[0]);
  const [filterCardType, setFilterCardtype] = useState();
  const [selectedCardHolder, setCardHolder] = useState();

  let FilteredCardlist = MOCKVALUES;

  if (filterCardType) {
    FilteredCardlist = FilteredCardlist.filter((item) => {
      return item.card_type === filterCardType;
    });
  }

  if (selectedCardHolder) {
    FilteredCardlist = FilteredCardlist.filter((item) => {
      return item.owner_id === selectedCardHolder.value;
    });
  }

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
          <i className="ri-search-line"></i>
        </div>
        <div className="p-2 cursor-pointer bg-gray-50">
          <i className="ri-filter-3-line" />
          Filters
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        {renderTabs(activeTabs, FilteredCardlist)}
      </div>
    </div>
  );
}

export default App;
