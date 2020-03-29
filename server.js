const express = require('express')
const path = require('path')
//inicializacion
const app = express()


//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join( __dirname + '/views'))

//midelwares
app.use(express.urlencoded({extended: false}))
//vglobal variables

//routers
app.get('/', (req, res) => {
    res.send('hello mundo')
})
//static file g

module.exports = app