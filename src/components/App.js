import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is React.js?",
    content: "It is a front-end JavaScript library",
  },
  {
    title: "Why do we use React?",
    content: "It allows reusability of code",
  },
  {
    title: "What is your name?",
    content: "My name is Subhajyoti Naskar",
  },
];

const options = [
  {
    lable: "The color Red",
    value: "red",
  },
  {
    lable: "The color Green",
    value: "green",
  },
  {
    lable: "The color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
