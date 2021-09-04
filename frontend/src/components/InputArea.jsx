import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) { 
    const newInputText = {
      inputText: inputText
    }

    axios.post("http://localhost:5000/items/save", newInputText)
      .then(() => {
        console.log("Data has been sent to the server");
      }) 
      .catch(() => {
        console.log("Internal server error");
      })
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} autoComplete="off" />
      <button
        onClick={() => {
          // props.onAdd(inputText);
          addItem();
          setInputText("");
        }}
      >
        {/* <AddIcon color="action" /> */}
        <AddIcon style={{color: "white"}} /> 
      </button>
    </div>
  );
}

export default InputArea;