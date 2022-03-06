const express = require('express');

require('./db/conn')

const app = express();

const path = require('path');

const port = 9000;


const Register = require("./models/student");
//information



const statices = path.join(__dirname, "../public")

const tempalte = path.join(__dirname, "../template")


app.set("view engine", "hbs")



app.set("views", tempalte)


app.use(express.static(statices))

app.use(express.json())


app.use(express.urlencoded({ extended: false }))

//

app.get("/", (req, res) => {




    res.render("")

})





//index

app.get('/index.hbs', (req, res) => {


    res.render("index")

})




//fear to


app.get("/fear.hbs", (req, res) => {




    res.render("fear.hbs")

})




//logins



app.get('/login.hbs', (req, res) => {


    res.render("login.hbs")


})


//login from information screen


app.post('/login.hbs', async(req, res) => {




    try {




        const users = new Register({

            email: req.body.email,

            password: req.body.password

        })


        const datas = await users.save()

        res.status(201).render("")

    } catch (e) {


        console.log(e + 'error not work register from')

    }


})

//     res.render("login.hbs")


// })



//bit_pric




app.get('/bit_pric.hbs', (req, res) => {


    res.render("bit_pric.hbs")


})






//alst row class

app.listen(port, "127.0.0.1", () => {


    console.log(port + " number")
})