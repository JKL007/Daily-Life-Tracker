import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateArea from "./CreateArea";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import InputRecord from "./InputRecord";
import Record from "./Record";
import Title from "./Title";


function App() {
  return (
    <div>
      <Header />
      <Title />
      <div className="row">
        <div className="container records">
          <div className="heading">
            <h1>Records</h1>
          </div>
          <InputRecord />
          <Record />
          </div>
         
        <div className="container toDoList">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea />
          <ToDoItem />
        </div>
      </div>
      
      <div>
        <CreateArea />
        <Notes />
      </div>
      
      <Footer />
    </div>

  );
};

export default App;
