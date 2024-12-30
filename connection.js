const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/')
const db = mongoose.connection
db.on('connected',()=>{console.log('mongodb is connected')})
db.on ('error',()=>{console.log('error in mongodb connection')})
db.on ('disconnected',()=>console.log('database is disconnected'))

module.exports = db