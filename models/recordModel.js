const mongoose = require("mongoose");

const recordsSchema = {
  stime: String,
  etime: String,
  activity: String
};

const Record = mongoose.model("Record", recordsSchema);

module.exports = Record;