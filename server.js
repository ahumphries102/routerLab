const express = require('express')
const app = express()
const birdies = require('./bird')
const port = 3000

app.use(birdies)

app.listen(port, function() {
    console.log('Bird stuff ', port);
})