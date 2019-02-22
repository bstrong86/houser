require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('express')


//CONTROLLERS
const ctrl = require('./controllers/controller')

//ENV
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}=process.env

const app = express()

app.use(bodyParser.json())

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000000
        }
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    console.log('Connected to database')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})

//ENDPOINTS

app.get('/api/wizard',ctrl.getHouses)
app.post('/api/wizard', ctrl.addHouse)
app.delete('/api/wizard/:id', ctrl.deleteHouse)
