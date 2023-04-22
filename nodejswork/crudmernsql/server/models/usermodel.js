const db=require("../config/db");

const UserModel=function(userdata){
    this.firstname=userdata.firstname;
    this.lastname=userdata.lastname;
    this.number=userdata.number;
    this.email=userdata.email;

}

////////////SQL QUERIES///////////

///////////////GET ALL USERS////////////////////////////////

UserModel.mgetallusers=(result)=>{
    db.query("SELECT * FROM usersdata", (err,res)=>{
        if(err){
            console.log("error while fetching all users",err);
            result(null ,err);
        }else{
            result(null,res);
        }

    })
}

///////////////GET USERS BY ID////////////////////////////////

UserModel.mgetUserById=(id,result)=>{
    db.query("SELECT * FROM usersdata where firstname=?",id,(err,res)=>{
        if(err){
            console.log("error while fetching by id users",err);
            result(null ,err);
        }else{
            result(null,res);
        }

    })
}
///////////////CREATE USER////////////////////////////////
UserModel.mcreatenewuser=(result)=>{
    // db.query("INSERT INTO usersdata (firstname,lastname,number,email) VALUES('dhar','pal','2','pal@gmail')",(err,res)=>{
    db.query("INSERT INTO usersdata SET ?",userdata,(err,res)=>{
        if(err){
            console.log("error while fetching by id users",err);
            result(null ,err);
        }else{
            result(null,res);
        }

    })
}
///////////////UPDATE USERS BY ID////////////////////////////////
UserModel.mupdateuserbyid=(id,result)=>{
    db.query("UPDATE usersdata SET ?",usersdata,id,(err,res)=>{
        if(err){
            console.log("error while fetching by id users",err);
            result(null ,err);
        }else{
            result(null,res);
        }

    })
}
///////////////DELETE USER BY ID////////////////////////////////
UserModel.mdeleteuserbyid=(id,result)=>{
    db.query("DELETE FROM usersdata where firstname=?",id,(err,res)=>{
        if(err){
            console.log("error while fetching by id users",err);
            result(null ,err);
        }else{
            result(null,res);
        }

    })
}



module.exports=UserModel;