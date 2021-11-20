var express = require("express");
var router = express.Router();
var requests = require('requests');


router.get("/",(req,res)=>{
   requests("https://dog.ceo/api/breeds/image/random").on("data",(chunk)=>{
        var objdata = JSON.parse(chunk);
        // console.log(objdata.messag);
        res.render("index.hbs",{title:"This is testing the hbs",ip:objdata.message});
    });
});




module.exports = router;