const express = require('express')
const ejs = require('ejs')
const route = require('./route')
const server = express();
const port = 3333;


server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.static('./public/'))

// server.get('/', async (req, res) => {

//   // Como no axios já vem o response, então já tiro o data direto do response
//   const { data } = await axios('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
//   res.render('home', {products: data.products})
  
// })

// server.get('/wishlist', (req, res) => {
//   res.render('wishlist')
// })

server.use(route)

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})