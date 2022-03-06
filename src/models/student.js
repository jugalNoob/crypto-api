const mongoose = require("mongoose");



const dataset = new mongoose.Schema({


    email: {

        type: String,


    },


    password: {

        type: Number
    }

})


const Register = new mongoose.model("Users", dataset)

module.exports = Register;