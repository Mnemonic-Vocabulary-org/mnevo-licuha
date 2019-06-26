const express = require("express");
const app = express();
const cors = require("cors");

app.use( express.static('dist'));
app.use(cors());

app.post("/api/login",(req,res)=>{
  console.log("LOGIN REQUEST");
  res.end();
})

app.post("/api/register",(req,res)=>{
  console.log("REGISTER REQUEST");
  console.log(req.body);
  res.end();
})

app.listen(process.env.PORT || 8081);
