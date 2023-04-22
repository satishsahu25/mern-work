const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const userroutes=require("../server/routes/userroutes")

////////////MIDDLEWARES///////////////
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



///////////DEFINING THE DEFAULT '/' ROUTE/////////
app.use("/api/user",userroutes);

app.listen(5000,()=>{
    console.log("node running at :"+5000);
})