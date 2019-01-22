const express = require('express');
const bodyParser = require('body-parser');

const student = require('./routes/student.routes');

const app = express();

// tell express to use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
})

// use router
app.use('/student', student);

module.exports = app;