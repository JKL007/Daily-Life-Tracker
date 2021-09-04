import React, {useEffect, useState} from "react";
import axios from "axios";

function Record() {
  const [records, setRecords] = useState([{
    stime: "",
    etime: "",
    activity: ""
  }]);

  useEffect(() => {
    fetch("/records").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setRecords(jsonRes));
  })

  function deleteRecord(id) {
    axios.delete(`http://localhost:5000/records/delete/${id}`)
      .then(() => {
        setRecords(prevInputs => {
          return prevInputs.filter((input, index) => {
            return index !== id;
          });
        });
      })  
  }

  return (
    <div>
      {records.map((record, index) => {
        return (
          <div 
            onClick={() => {
              deleteRecord(record._id);
            }}
          >
            <li>{record.stime} - {record.etime}: {record.activity}</li>
          </div>
        );
      })}               
    </div>
  );
}

export default Record;
