import React from "react";
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

function Header() {
  return (
    <header>
      <div className="header-row">
        <div style={{display: "inline-block", position: "relative"}}>
          <TrackChangesIcon style={{marginRight: 10, fontSize: 40, color: "white"}} />
        </div>
        <h1>Daily Life Tracker</h1>
      </div> 
    </header>
  );
}

export default Header;
