// const express = require('express')
import express from "express";

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/cuong", (req, res) => {
    res.send("Hello cuong")
})
app.listen(PORT, () => {
    console.log(`ok ${PORT}`);
})