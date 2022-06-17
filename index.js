const express = require('express')
const ejs = require('ejs')

const app = express();
const port = 3333;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public/'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})