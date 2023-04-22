const mysql=require("mysql")

const dbconnect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crudmernsql"
});

dbconnect.connect((error)=>{
    if(error) throw error;
    console.log("connection successful to sql");

});

module.exports=dbconnect;


