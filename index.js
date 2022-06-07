const express = require('express')
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/Auth')
const usersRoute = require('./routes/Users')
const MONGO_URL = process.env['MONGO_URL']

app.use(express.json());

mongoose.connect(MONGO_URL).then(console.log('connected to MDB')).catch((err)=>console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/auth', usersRoute)

app.listen(3030, ()=>console.log('connected to server'))