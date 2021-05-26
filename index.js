const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
const port  = 5000;
const fs = require('fs')

app.get('/', (req, res) => {
    res.send('Hello World!')
    })

app.get('/currency', (req,res) =>{
    fs.readFile('./Data/Data.json', 'utf-8', (err, data) => {
        const userData = JSON.parse(data)
        res.send(userData)
    })
})


app.listen(port)