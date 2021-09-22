import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";

const Dropdown = ({ label, selected, onSelectedChange, options }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  // Added a manual event handler for body inside useEffect

  useEffect(() => {
    const onBodyClick = (event) => {
      // It checks if the event is been called by dropdown then and returns without implementing the code for addEventListener if true
      if (ref.current.contains(event.target)) {
        // console.log(event.target);
        return;
      }
      // console.log("Body");
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    // Cleanup function
    return () => {
      // Removing the event listner from the body when the Component is Unmounted
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // If the option is already selected it wont show on the dropdown menu
    if (selected === option) return null;
    return (
      <div
        onClick={() => {
          // console.log("Item");
          onSelectedChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.lable}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            // console.log("Dropdown");
            setOpen(!open);
          }}
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
