const mongoose = require('mongoose')
const request = require('express')

const host = process.env.DB_HOST || 'mongodb://localhost'
const port = process.env.DB_PORT || 27017
const dbname = process.env.DB_NAME || 'local'

try {
  mongoose.connect(`${host}:${port}/${dbname}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auto_reconnect: true,
  })
  console.log(`CON SUC: ${host}:${port}/${dbname}`)
} catch (error) {
  console.log('ERROR DB: ', error)
}
