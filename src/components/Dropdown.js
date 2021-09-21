import React from "react";
import { useState } from "react/cjs/react.development";

const Dropdown = ({ selected, onSelectedChange, options }) => {
  const [open, setOpen] = useState(false);
  const renderedOptions = options.map((option) => {
    // If the option is already selected it wont show on the dropdown menu
    if (selected === option) return null;
    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.lable}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <lable className="lable">Select a Color</lable>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.lable}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
