require("dotenv").config();
const express = require("express");
const chats = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
