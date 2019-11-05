const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//setting veiw engine
app.set("veiw engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));

/*
     ROUTES
*/

 //GET /S
app.get('/', function (req, res) {
  let weathernow = "The weather in" + req.body.city + "is 70 C"
    res.render("home.ejs", {weather:weathernow, error = err});
    let err = false
    
});

app.post("/", function(req, res){
  let weathernow = "The weather in" + req.body.city + "is 70 C"
    res.end();
});
 
app.listen(3000, function(){
  console.log ("server is live on port: 3000");
});