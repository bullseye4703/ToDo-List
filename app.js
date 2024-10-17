const express = require("express"); 
const bodyParser =require("body-parser");

const date = require(__dirname+"/date.js");
const app = express();
const mongoose = require('mongoose');
const { findItems, saveItem, deleteItem } = require("./op/operations");

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async function (req, res) {  
    let day = date.getDate();
    const items = await findItems(); 
    res.render("list", {listTitle:day,  newListItem: items, act: ""});
});

app.post("/", async function (req, res) {
    const itemName = req.body.newItem;
    if(itemName)
        await saveItem(itemName);
    res.redirect("/");
});


app.post("/delete",async (req,res) => {
    const checkedItem = req.body.checkbox;
    await deleteItem(checkedItem);
    res.redirect("/");
});

app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(3000, function () {
    console.log("server is up and running at 3000");
});

