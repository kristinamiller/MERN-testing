const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello App Academy!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`listening on port ${port}`)})

