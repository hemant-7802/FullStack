// import { Express } from "express";
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello There!')
})
app.get('/', (req, res) => {
    res.send("This is my first react project")
})

app.listen(5000, () => {
    console.log("App listening on port number 5000");
})