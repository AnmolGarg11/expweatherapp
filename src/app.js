const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname , "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set('views'   , template_path);
hbs.registerPartials(partial_path);

app.use(express.static(publicDirPath));


app.get("" , (req , res)=>{
  res.render("index");

})

app.get("/about" , (req , res)=>{
  res.render("about.hbs");

})

app.get("/weather", (req, res) => {
  res.render('weather');
});

app.get("*", (req, res) => {
  res.render('404error' , {
    errorMsg : 'Oops! Page Not Found'
  });
});

app.listen(port , ()=>
{
    console.log(`listening on port no. ${port}`);
})