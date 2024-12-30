const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./connection')
const book = require('./models/bookmodel')
app.use(express.json())
app.listen(3000,()=>{
    console.log('server is connected')
})