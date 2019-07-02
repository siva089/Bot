const express = require("express");
const app = express();
const bodyParser=require("body-parser")
const port = 3000;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post("/purchase", async (req, res) => {
  console.log(req.body);
  
  res.send("ok")
});

app.listen(port, () => {
  console.log("server started");
});
