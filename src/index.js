var express = require("express");
var router = express.Router();
var requests = require('requests');
var db = require("../DB/cars.js");
var bodyparser = require("body-parser");
//database realted for request data
router.use(bodyparser.urlencoded({extended : false}));
router.use(bodyparser.json());

router.get("/",(req,res)=>{
   requests("https://dog.ceo/api/breeds/image/random").on("data",(chunk)=>{
        var objdata = JSON.parse(chunk);
        // console.log(objdata.messag);
        res.render("index.hbs",{title:"This is testing the hbs",ip:objdata.message});
    });

});

router.post("/cars",async (req,res)=>{
    const result = await db.createCar(req.body);
    res.status(201).json({id : result[0]});
});

module.exports = router;