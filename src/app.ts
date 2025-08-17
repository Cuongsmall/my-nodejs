// const express = require('express')
import express from "express";
// require('dotenv').config();
import 'dotenv/config'
import webRouters from "./routes/wed";
import { initDatabase } from "config/send";



const app = express();
const PORT = process.env.PORT || 8080;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config router 
webRouters(app);

//config data
initDatabase();
//config static files : image/css/js
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`ok ${PORT}`);

})