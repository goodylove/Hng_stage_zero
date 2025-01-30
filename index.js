const express = require("express");
require("express-async-errors");
const cors = require("cors");

const Router = require("./routes/devRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/stage0", Router);

function start() {
  app.listen(PORT, () => {
    console.log("Server is running on port 3000");
  });
}

start();
