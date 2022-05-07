import logo from "./logo.svg";
import "./App.css";
import "./Input.css";
import Tab from "./components/Tabs";
import { useState } from "react";

function App() {
  const [ActiveTabs, setActiveTabs] = useState(Tabs[0]);
  return (
    <div className="App">
      <Tab>
        <Tab.item
          label="tab1"
          active={true}
          onClick={() => console.debug("jello")}
        />
        <Tab.item
          label="tab1"
          active={true}
          onClick={() => console.debug("jello")}
        />
      </Tab>
      {renderTabs()}
    </div>
  );
}

export default App;
