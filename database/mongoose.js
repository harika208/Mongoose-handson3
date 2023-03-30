const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        const dbConn = await mongoose.connect(url);
        console.log("database connected")
    } catch(error) {
        console.log("Error in coneccting db")
    }
}

module.exports = connect;