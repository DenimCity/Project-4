require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})



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
// app.get('/', (req,res) => {
//   res.send('Hello world!')
// })

const user = require('./routes/userController')
app.use('/homecoming/user', user)
console.log('phase 1 route in server file ', user)

const city = require('./routes/cityController')
app.use('homecoming/city', city)

console.log('phase 2 route server file', city)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("your Server aka Api is running on port " + PORT);
})