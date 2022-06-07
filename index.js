const express = require('express')
const app = express();
const mongoose = require('mongoose');
const MONGO_URL = process.env['MONGO_URL']

mongoose.connect(MONGO_URL).then(console.log('connected to MDB')).catch((err)=>console.log(err))

app.get('/d', (req, res)=>console.log('Ugly face'))

app.listen(3030, ()=>console.log('connected to server'))