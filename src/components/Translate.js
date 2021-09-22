import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Translate = () => {
  const options = [
    {
      lable: "Afrikaans",
      value: "af",
    },
    {
      lable: "Arabic",
      value: "ar",
    },
    {
      lable: "Hindi",
      value: "hi",
    },
  ];

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            type="text"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
