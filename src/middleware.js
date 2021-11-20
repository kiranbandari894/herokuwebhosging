module.exports = function(req,res){
    res.send("the views directories are "+ req.app.get("views"))
}