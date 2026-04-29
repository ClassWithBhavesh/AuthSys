const mongoose = require("mongoose");

const connDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connection Established");
    } catch (err) {
        console.log(`Error connecting DB - ${err}`);
        process.exit(1);
    }
};

module.exports = connDB;