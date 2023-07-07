
const express = require('express');
import configViewEngine from './configs/viewengine';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api.js';


require('dotenv').config()


const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// setup view engine
configViewEngine(app);
// init web route
initWebRoute(app);

// init API route
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})