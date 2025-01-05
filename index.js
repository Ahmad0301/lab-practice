const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./connection')
const book = require('./models/bookmodel')
const user  =require('./models/usermodel')
app.use(express.json())
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`) 
    next();
    }
    app.use(logRequest);















app.listen(3000,()=>{
    console.log('server is connected')
})