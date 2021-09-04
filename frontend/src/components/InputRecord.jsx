import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import axios from "axios";

function InputRecord(props) {
  const [inputInfo, setInputInfo] = useState({
    stime: "",
    etime: "",
    activity: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputInfo(prevInputInfo => {
      return {
        ...prevInputInfo,
        [name]: value
      };
    });
  }

  function submitInfo(event) {
    // props.onAdd(inputInfo);
    const newRecord = {
      stime: inputInfo.stime,
      etime: inputInfo.etime,
      activity: inputInfo.activity
    }

    axios.post("http://localhost:5000/records/save", newRecord)
      .then(() => {
        console.log("Data has been sent to the server");
      }) 
      .catch(() => {
        console.log("Internal server error");
      })

    setInputInfo({
      stime: "",
      etime: "",
      activity: ""
    });
  }

  return (
    <div className="row">
      <table>
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input onChange={handleChange} name="stime" type="time" value={inputInfo.stime} required></input></td>
            <td><input onChange={handleChange} name="etime" type="time" value={inputInfo.etime} required></input></td>
            <td><input onChange={handleChange} name="activity" type="text" value={inputInfo.activity}></input> </td>          
          </tr>
        </tbody>   
      </table>  
    <button onClick={submitInfo}>
      <AddIcon style={{color: "white"}}/>
    </button>

    </div>
    
  );
}

export default InputRecord;