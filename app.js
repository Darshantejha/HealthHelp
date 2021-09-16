const express = require("express");
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/index.html");
  // res.send("hi");
});
app.get("/eye",(req,res)=>{
  res.sendFile(__dirname +"/eye.html");
});
 
app.listen(3000,()=>{
  console.log("server listening on port 3000");
});
