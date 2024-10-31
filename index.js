const express = require("express");
const app = express();
let port = 4000;
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
