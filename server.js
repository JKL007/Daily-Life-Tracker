const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin-julia:Test123@cluster0.tg8em.mongodb.net/dailyLifeDB", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("frontend/build"));
};

app.use("/notes", require("./routes/noteRoute"));
app.use("/items", require("./routes/itemRoute"));
app.use("/records", require("./routes/recordRoute"));

//HTTP request logger
// app.use(morgan("tiny"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
