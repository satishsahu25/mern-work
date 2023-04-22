const model=require("../models/usermodel")

///////////////GET USERS BY ID////////////////////////////////

    class usermanagingclass{

        static getuserbyid=(req,res)=>{
            model.mgetUserById(req.params.id,(err,user)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(user);
                }
            })

        }


///////////////GET ALL USERS////////////////////////////////
        static getallusers=(req,res)=>{
            model.mgetallusers((err,user)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(user);
                }

            })

        }

///////////////UPDATE USERS BY ID////////////////////////////////

        static updateuserbyid=(req,res)=>{
            model.mgetUserById(req.params.id,(err,user)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(user);
                }
            })


        }

///////////////CREATE USER////////////////////////////////

        static createnewuser=(err,req,res)=>{
            const empdata=new model(req.body);

            if(req.body.construtor === Object && Object.keys(req.body).length===0)
    {
        res.send(400).send({success:false, message:"Please fill all fileds"});
    }
    else{
     //console.log("valid data");
      //return;
      empmodel.createemployee(empdata,(err,employee)=>{
        if(err){
          res.send(err);
          res.json({status:true,message:"EMPOLYEE CREATED SUCCESSFULLY"});
        }

      });

    }



        }

///////////////DELETE USER BY ID////////////////////////////////

        static deleteuserbyid=()=>{
            model.mdeleteuserbyid(req.params.id,(err,user)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(user);
                }
            })


        }

}

module.exports=usermanagingclass;