const express = require("express");
const app = express();

const airoutes = require("./routes/airoutes");

app.use("/api", airoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});