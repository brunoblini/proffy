// Server

const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClass
} = require('./pages')

// Set up nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Initial state and configuration of the server
server
// Receive req data
.use(express.urlencoded({ extended: true }))
// Configure static files (css, scripts, images)
.use(express.static("public"))
// App routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClass)
// Starting server
.listen(5000)

