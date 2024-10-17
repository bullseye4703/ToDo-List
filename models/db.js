// db.js
const mongoose = require("mongoose");

// Connect to MongoDB
const uri = "mongodb://localhost:27017/todolistDB";
mongoose.connect(uri);

// Define item schema
const itemSchema = new mongoose.Schema({
    name: String
});


// Create models
const Item = mongoose.model("Item", itemSchema);

// Export models and database-related functions
module.exports = { Item};
