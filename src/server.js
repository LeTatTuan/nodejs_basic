
const express = require('express')
import configViewEngine from './configs/viewengine';
require('dotenv').config()


const app = express();
const port = process.env.PORT || 8080;


configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send('Hello World Le Tat Tuan!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})