const express = require("express");
const airoutes = require("./airoutes");
const app = express();
app.use(express.json());
app.use("/api/ai",airoutes);
app.listen(3000,()=>{
    console.log("server running on port 3000");
});
