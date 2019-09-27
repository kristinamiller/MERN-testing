const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello App Academy!");
});

// tell the app to listen on a given port
// use the port variable if you have one. if not use port 5000.

const port = process.env.PORT || 5001;

app.listen(port, () => {console.log(`listening on port ${port}`)})

//nodemon listens for changes in our code.