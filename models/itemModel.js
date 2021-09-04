const mongoose = require("mongoose");

const itemsSchema = {
  inputText: String
};

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;