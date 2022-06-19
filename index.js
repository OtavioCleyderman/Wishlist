const express = require('express')
const ejs = require('ejs')
const axios = require('axios')
const app = express();
const port = 3333;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public/'))

app.get('/', async (req, res) => {

  // Como no axios já vem o response, então já tiro o data direto do response
  const { data } = await axios('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
  res.render('home', {products: data.products})
  
})

app.get('/wishlist', (req, res) => {
  res.render('wishlist')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})