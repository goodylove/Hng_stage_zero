const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

function start() {
  app.listen(PORT, () => {
    console.log("Server is running on port 3000");
  });
}

start();
