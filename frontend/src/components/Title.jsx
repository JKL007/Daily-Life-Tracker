import React, { useState } from "react";

function Title(props) {
  setInterval(updateTime, 1000);
  // setInterval

  const date = new Date();
  const now = new Date().toLocaleTimeString();
  const showDate = date.getMonth()+1  + "/" + date.getDate() +  "/" + date.getFullYear();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="title-container">
      <h1>{showDate} &emsp; {time}</h1>
    </div>
  )

}

export default Title;