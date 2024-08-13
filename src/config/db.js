const mongoose = require("mongoose");
const dbUser = "";
const dbPassword = "";

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://ericcampos:<password>@cluster0.8wvwwc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log('conectou ao banco')
    } catch (error) {
        console.log*(error)
    }
}


module.exports = conn;