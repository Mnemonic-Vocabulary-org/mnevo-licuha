const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use((req,res,next)=>{console.log("REQUEST\n"+req.ip); next()});
app.use( express.static('dist'));

app.post("/api/login",(req,res)=>{
  console.log("LOGIN REQUEST");
  res.send("LOGIN SUCCESS RESPONSE");
})

app.post("/api/register",(req,res)=>{
  console.log("REGISTER REQUEST");
  console.log(req.body);
  res.send("REGISTER SUCCESS RESPONSE");
})

app.listen(process.env.PORT || 8081);
