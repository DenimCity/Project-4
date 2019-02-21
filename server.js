require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require("./routes");


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());

const user = require('./controllers/userController')
app.use('/homecoming/user', user)

const city = require('./controllers/cityController')
app.use('/homecoming/city', city)

const house = require('./controllers/houseController')
app.use('/homecoming/city/:cityId/houses', house)

const event = require('./controllers/eventController')
app.use('/homecoming/events', event)

const meetUp = require('./controllers/meetupController')
app.use('/homecoming/meetups', meetUp)

app.use(routes);
app.use(express.static(__dirname + '/client/build/'));
// app.get('*', (req,res) => {
//   res.sendFile(__dirname + '/client/build/index.html')
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`your server - Api is running on port + ${PORT}`);
})
