const dotenv = require("dotenv").config()
const An = require("./Authnodemailer")
const express = require("express")
const path = require('path');
const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

const {SERVER_PORT} = process.env



app.post("/api/email", An.addContactForm)



app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(4000, ()=> {
    console.log(`Listening on port ${4000}.`)
})