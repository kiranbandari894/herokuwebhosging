var express = require("express");
var router = express.Router();
var requests = require('requests');
var db = require("../DB/cars.js");
var bodyparser = require("body-parser");
//database realted for request data
router.use(bodyparser.urlencoded({extended : false}));
router.use(bodyparser.json());

router.get("/",(req,res)=>{


});
router.get("/about",function(req,res){
    
});

router.post("/cars",async (req,res)=>{
    const result = await db.createCar(req.body);
    res.status(201).json({id : result[0]});
});

module.exports = router;