const express = require("express");
const router = express.Router();
const Item = require("../models/itemModel");

router.route("/").get((req, res) => {
  Item.find()
    .then(foundItems => res.json(foundItems))
})


router.post("/save", (req, res) => {
  // console.log(req.body);
  data = req.body;
  const newItem = new Item(data);    //cannot put req.body directly in Note()!!!

  newItem.save((error) => {
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
  Item.deleteOne({_id: deletedId})
    // .then(console.log("Successfully deleted the item"))
    .catch(error => console.log("Couldn't delete the item"));
})


module.exports = router;