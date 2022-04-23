var express = require("express");
var body_parser = require("body-parser");
var mongodb = require("mongodb");


var app = express(); 
var client = mongodb.MongoClient;



app.get("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/",function(err,db){
        if(err){
            console.log((err));
            return;
        }
        var dbo = db.db("School");
        var user = {name:"Abhijit",city:"Kolhapur"}
        dbo.collection("students").insertOne(user,function(err,result){
            if(err){
                console.log(err);
            }
            res.send(result);
        })

    })

});



app.listen(8081,function(){
    console.log("website is running");
})