import "./App.css";
import "./Input.css";
import "remixicon/fonts/remixicon.css";
import Tab from "./components/Tabs";
import { useState } from "react";
import Yours from "./Pages/Yours";
import All from "./Pages/All";
import Blocked from "./Pages/Blocked";
import { Tabs } from "./Pages/constant";

const renderTabs = (value) => {
  switch (value) {
    case "Yours":
      return <Yours />;
    case "All":
      return <All />;
    case "Blocked":
      return <Blocked />;
  }
};

function App() {
  const [activeTabs, setActiveTabs] = useState(Tabs[0]);
  return (
    <div className="App p-8">
      <div className="flex justify-between py-6">
        <div className="flex space-x-2">
          <div className="font-bold">Virtual Cards</div>
          <div className="bg-gray-100 text-center align-middle content-center ">
            <i className="ri-vidicon-line text-blue-600"></i>
            <span className="text-blue-600"> Learn more</span>
          </div>
        </div>
        <div className="text-center">
          <i className="ri-add-line"></i>Virtual Cards
        </div>
      </div>
      <Tab>
        {Tabs.map((item) => {
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

      {renderTabs(activeTabs)}
    </div>
  );
}

export default App;
