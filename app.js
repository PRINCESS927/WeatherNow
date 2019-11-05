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
  res.render("home.ejs");
});

app.post("/food", function(req, res){
    console.log("req");
});
 
app.listen(3000, function(){
  console.log ("server is live on port: 3000");
});