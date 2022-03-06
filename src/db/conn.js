// const mongoose = require('mongoose');
// const DB = "mongodb+srv://jugals:jugal123@cluster0.gt4hy.mongodb.net/ones?retryWrites=true&w=majority";



// mongoose.connect(DB, {



//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // userCreateIndex: true,
//     // userFindAndModify: false,


// }).then((result) => {

//     console.log("to connect")

// }).catch((err) => {

//     console.log("error")

// });


const mongoose = require('mongoose');


const DB = "mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority";



mongoose.connect(DB, {



    useNewUrlParser: true,
    useUnifiedTopology: true,
    // userCreateIndex: true,
    // userFindAndModify: false,


}).then((result) => {

    console.log("to connect")

}).catch((err) => {

    console.log("error")

});