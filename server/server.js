const express = require('express')
app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const morgan = require('morgan')
const cors = require('cors')

PORT = process.env.PORT || 4000
MONGO_URI = 'mongodb+srv://stevenrodmar:wKSRFdpQy0RjvHnv@cluster0.auavo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// bring routes

postRoutes = require('./routes/routes')

// connect DB
mongoose.connect(MONGO_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB connected"))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})

// middlewares

app.use(expressValidator())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use("/", postRoutes)

app.listen(PORT, () => {
    console.log(`Local server running at port ${PORT}`)
})