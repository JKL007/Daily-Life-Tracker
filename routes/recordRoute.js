const express = require("express");
const router = express.Router();
const Record = require("../models/recordModel");

router.route("/").get((req, res) => {
  Record.find()
    .then(foundRecords => res.json(foundRecords))
})


router.post("/save", (req, res) => {
  // console.log(req.body);
  data = req.body;
  const newRecord = new Record(data);    //cannot put req.body directly in Note()!!!

  newRecord.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Something went wrong" });
    } else {
      res.json({ msg: "Data has been saved!" });
    }
  })
})

router.delete("/delete/:id", (req, res) => {
  // console.log(req.params);
  const deletedId = req.params.id;
  Record.deleteOne({_id: deletedId})
    // .then(console.log("Successfully deleted the item"))
    .catch(error => console.log("Couldn't delete the item"));
})


module.exports = router;