const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // Print to the console
  console.log("Request incoming2");
  res.send("Now is Dev Time ddddddd");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
