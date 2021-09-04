const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

// router.route("/notes").get((req, res) => {
//   Note.find()
//     .then(foundNotes => res.json(foundNotes))
// })

router.get("/", (req, res) => {
  Note.find({ })
    .then(foundNotes => res.json(foundNotes))
    .catch(error => console.log('error: ', error));
})


router.post("/save", (req, res) => {
  // console.log(req.body);
  // const title = req.body.title;
  // const content = req.body.content;
  // const newNote = new Note({
  //   title,
  //   content
  // });
  data = req.body;
  const newNote = new Note(data);    //cannot put req.body directly in Note()!!!

  newNote.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Something went wrong" });
    } 
    // else {
    //   res.json({ msg: "Data has been saved!" });
    // }
  })
})


router.delete("/delete/:id", (req, res) => {
  // console.log(req.params);
  const deletedId = req.params.id;
  Note.deleteOne({_id: deletedId})
    // .then(console.log("Successfully deleted the note"))
    .catch(error => console.log("Couldn't delete the note"));
    // Note.findByIdAndRemove(deletedId, (err) => {
    //   if (err) {
    //     console.log("Couldn't delete item");
    //   } else {
    //     console.log("Successfully deleted item");
    //   }
    // })
})


module.exports = router;