// dbOperations.js
const { Item } = require("../models/db"); // Import the Item model from db.js

// Function to find all items
async function findItems() {
    try {
        const items = await Item.find({});
        return items;
    } catch (err) {
        console.log(err);
        return [];
    }
}

//function to save item
async function saveItem(itemName) {
    const newItem = new Item({
        name: itemName
    })
    try{
        await newItem.save();
    }
    catch(err){
        console.log(err);
    }
}

// Function to delete an item by ID
async function deleteItem(id) {
    try {
        await Item.deleteOne({_id:id});
    } catch (err) {
        console.log(err);
    }
}

module.exports = { findItems, saveItem, deleteItem };
