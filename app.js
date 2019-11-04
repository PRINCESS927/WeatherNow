const express = require('express')
const app = express()

//setting veiw engine
app.set("veiw engine", "ejs")

/*
     ROUTES
*/

 //GET /S
app.get('/', function (req, res) {
  res.render("home.ejs");
})
 
app.listen(3000, function(){
  console.log ("server is live on port: 3000");
});