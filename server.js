const express = require('express');
const app = express();
const emailSender = require('./emailSender');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file
console.log('Environment variables:');
console.log(process.env);
app.use(bodyParser.json());
app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/timing.html');
});

app.post('/set-timer', (req, res) => {
  const { email, description, date, time } = req.body;
  emailSender(email, description, date, time)
    .then((response) => {
      res.send('Timer set successfully!');
    })
    .catch((error) => {
      res.status(500).send('Error setting timer: ' + error.message);
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});