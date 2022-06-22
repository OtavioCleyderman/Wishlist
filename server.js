const express = require('express')
const ejs = require('ejs')
const route = require('./route')
const server = express();
const port = 3333;

server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.static('./public/'))

server.use(route)

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})