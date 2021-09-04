import React, {useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";


function Notes() {
  const [notes, setNotes] = useState([{
    title: "",
    content: ""
  }])

  useEffect(() => {
    fetch("/notes").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes));
  })

  const deleteNote = (id) => {
    // console.log
    axios.delete(`http://localhost:5000/notes/delete/${id}`);    //backquote rather than regular!!!
    setNotes(prevNotes => {
        return prevNotes.filter(noteItem => {
          return noteItem.id !== id;
        });
      }); 
  }

  return (
    <div>
      {notes.map(noteItem =>{
        return (
          <div className="note">
            <h1>{noteItem.title}</h1>
            <p>{noteItem.content}</p>
            <button onClick={() => {
              deleteNote(noteItem._id)
              }}>
              <DeleteIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;