const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const port = 8080;
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.get("/", (req, res) => {
  res.json({ msg: "This is Home" });
});
app.get("/about", (req, res) => {
  res.json({ msg: "This is About" });
});
app.get("/contact", (req, res) => {
  res.json({ msg: "This is Contact" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
