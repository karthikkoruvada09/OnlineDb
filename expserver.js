var express=require('express');
var app=express();
var mongo=require('mongodb').MongoClient;
var path=require('path');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
var dbo;

app.use(express.static(path.join(__dirname,'/dist/onlineDB')));
app.use(bodyparser.json());


mongo.connect('mongodb://karthik:karthik1@ds031627.mlab.com:31627/onlinenb',(err,db)=>{
    if (err) throw err;
     dbo=db.db('onlinenb');
})




    app.listen(5000,()=>{ 
        console.log("server started")
        })
        



    //notifications
app.get('/logout/notiadmin',(req,res)=>{

        console.log("karthik");

        dbo.collection('addnoti').find().toArray((err,data)=>{

            if (err) throw  err;
            res.send(data);
        })

    });


     //results
app.get('/logout/resultadmin',(req,res)=>{

    console.log("karthik");

    dbo.collection('addres').find().toArray((err,data)=>{

        if (err) throw  err;
        res.send(data);
    })

});
 


        //admin register data 
app.post('/home/admin',(req,res)=>{
    
    console.log(req.body);

    dbo.collection('adminreg').insert(req.body,(err,data)=>{
        if (err) throw err;
        res.send(data);


       
    })
});



        //student register data 
        app.post('/home/student',(req,res)=>{
    
            console.log(req.body);
        
            dbo.collection('adminreg').insert(req.body,(err,data)=>{
                if (err) throw err;
                res.send(data);
        
        
               
            })
        });



      //admin added notification data 
      app.post('/logout/notiadmin',(req,res)=>{
    
        console.log(req.body);
    
        dbo.collection('addnoti').insert(req.body,(err,data)=>{
            if (err) throw err;
            dbo.collection('addnoti').find().toArray((err,data)=>{

                if (err) throw err;
                res.send(data);
    
    
           
        })
    })
});



    
      //admin added rsesults data 
      app.post('/logout/resultadmin',(req,res)=>{
    
        console.log(req.body);
    
        dbo.collection('addres').insert(req.body,(err,data)=>{
            if (err) throw err;
            res.send(data);
    
    
           
        })
    });


    //admin notifications delete

    app.delete('/logout/notiadmin/:id',(req,res)=>{

        console.log(req.params.id)

        var objid=mongoose.Types.ObjectId(req.params.id);

        console.log(objid);
        dbo.collection('addnoti').remove({_id:objid},(err,result)=>{

            if (err) throw err;

            dbo.collection('addnoti').find().toArray((err,data)=>{

                if (err) throw err;
                res.send(data);
            })

        })


    });
        



      //admin notifications update

      app.put('/logout/notiadmin',(req,res)=>{

        console.log(req.body._id)

        var objid=mongoose.Types.ObjectId(req.body._id);

        dbo.collection('addnoti').update({_id:objid},{Date:req.body.Date,Branch:req.body.Branch,Notification:req.body.Notification},(err,data)=>{

            if (err) throw err;

            dbo.collection('addnoti').find().toArray((err,data)=>{

                if (err) throw err;
                res.send(data);
            })

        })
    });


    
  
      //logincheck  data 
      app.post('/home/login',(req,res)=>{
    
        console.log(req.body);
    
        dbo.collection('adminreg').find({username:req.body.username,password:req.body.password}).toArray((err,data)=>{
            if (err) throw err;
            if (data[0]!=null)
            {
            res.send(data);
            }
            else{
                res.send(data); 
            }
    
    
           
        })
    });



    
    //admin results delete

    app.delete('/logout/resultadmin/:id',(req,res)=>{

        console.log(req.params.id)

        var objid=mongoose.Types.ObjectId(req.params.id);

        console.log(objid);
        dbo.collection('addres').deleteOne({_id:objid},(err,result)=>{

            if (err) throw err;

            dbo.collection('addres').find().toArray((err,data)=>{

                if (err) throw err;
                res.send(data);
            })

        })


    });




    
      //admin results update

      app.put('/logout/resultadmin',(req,res)=>{

        console.log(req.body._id)
        

        var objid=mongoose.Types.ObjectId(req.body._id);

        dbo.collection('addres').update({_id:objid},{Date:req.body.Date,Branch:req.body.Branch,name:req.body.name,percentage:req.body.percentage},(err,data)=>{

            if (err) throw err;

            dbo.collection('addres').find().toArray((err,data)=>{

                if (err) throw err;
                res.send(data);
            })

        })
    });

      
      
  

    
      //admin pro update

      app.put('/logout/proadmin',(req,res)=>{

        console.log(req.body._id)
        

        var objid=mongoose.Types.ObjectId(req.body._id);

        dbo.collection('adminreg').update({_id:objid},{cpassword:req.body.cpassword,dob:req.body.dob,email:req.body.email,gender:req.body.gender,password:req.body.password,phno:req.body.phno,username:req.body.username},(err,data)=>{

            if (err) throw err;

            dbo.collection('adminreg').find().toArray((err,data)=>{

                console.log("j")
                if (err) throw err;
                res.send(data);
            })

        })
    });



    
    
      //student pro update

      app.put('/logoutstudent/prostu',(req,res)=>{

        console.log(req.body._id)
        

        var objid=mongoose.Types.ObjectId(req.body._id);

        dbo.collection('adminreg').update({_id:objid},{branch:req.body.branch,cpassword:req.body.cpassword,dob:req.body.dob,email:req.body.email,gender:req.body.gender,password:req.body.password,phno:req.body.phno,username:req.body.username},(err,data)=>{

            if (err) throw err;

            dbo.collection('adminreg').find().toArray((err,data)=>{

                console.log("j")
                if (err) throw err;
                res.send(data);
            })

        })
    });