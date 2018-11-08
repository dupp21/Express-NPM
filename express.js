equire("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Api Info
app.get("/", (req, res) => {
  res.send("This is api demo");
});

app.listen(PORT, () => console.log(`application running on port ${PORT}`));
