import React, {useEffect, useState} from "react";
import axios from "axios";

function ToDoItem() {
  const [inputTexts, setInputTexts] = useState([""]);

  useEffect(() => {
    fetch("/items").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setInputTexts(jsonRes));
  })

  function deleteItem(id) {
    axios.delete(`http://localhost:5000/items/delete/${id}`);    //backquote rather than regular!!!

    setInputTexts(prevInputs => {
      return prevInputs.filter((input, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {inputTexts.map((input, index) => {
        return (
          <div 
            onClick={() => {
              deleteItem(input._id);
            }}
          >
            <li>{input.inputText}</li>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoItem;