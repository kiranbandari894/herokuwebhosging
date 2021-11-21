var express = require("express");
var path = require("path");
var port = process.env.PORT || 8000 ;
var app  = express();
// to use partials we have to include hbs module
var hbs = require("hbs");
var main = require("./src/index");

var staticPath = path.join(__dirname,"./public");
app.use(express.static(staticPath));
// setting the view engine
app.set("views",path.join(__dirname,"./templates/views"));
app.set("view engine","hbs");

// registering the partials
 hbs.registerPartials(path.join(__dirname,"./templates/partials"));

app.use("/",main);
app.get("/views",require('./src/middleware.js'));


app.get("*",(req,res)=>{
    res.render("error",{
        errorCode : 404,
        message : "Http - Request not found..."
    });
});
app.listen(port);