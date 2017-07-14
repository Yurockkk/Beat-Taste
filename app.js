var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.engine('html', require('ejs').renderFile);
app.set("view engine","html");


app.get("/",function(req,res){
	res.render("circles.html");
});


app.listen(process.env.PORT || 3000, process.env.IP,function(){
   console.log("The beat_taste app has started, PORT = " + process.env.PORT); 
});