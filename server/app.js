const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const rutas = require('./controllers/authController');
const cors = require('cors');

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/server', rutas);


app.listen(port, () => {
    console.log(`Running on port ${port}`);
})