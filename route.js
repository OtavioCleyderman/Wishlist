const express = require('express');
const axios = require('axios')
const route = express.Router();



route.get('/', async (req, res) => {

  // Como no axios já vem o response, então já tiro o data direto do response
  const { data } = await axios('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
  res.render('index', {page: 'home', products: data.products})
  
})


route.get('/wishlist', (req, res) => {
  res.render('index', {page: 'wishlist'})
})




module.exports = route