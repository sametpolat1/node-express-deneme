const express = require('express')
const res = require('express/lib/response')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.send('Hello about!'))
app.get('/hobbies', (req, res) => {res.sendFile(path.join(__dirname, "/index.html"))})

app.get("/friends", (req, res) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });
   
app.listen(port, () => console.log(`Example app listening on port ${port}!`))