const express = require('express')

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello Word")
})

app.get("/cuong", (req, res) => {
    res.send("Hello cuong")
})
app.listen(PORT, () => {
    console.log(`ok ${PORT}`);
})