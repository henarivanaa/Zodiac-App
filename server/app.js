if (process.env.NODE_ENV === "development") {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

// init cors
app.use(cors())

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => console.log(`listening on port: ${port}`))