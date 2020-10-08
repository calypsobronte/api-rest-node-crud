const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const indexTodoList = require('./routes/todoListRoutes');

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// connection to db
mongoose.connect(process.env.MONGO || 'mongodb://127.0.0.1:27017/todolist')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// import routestodoList
app.use('/api/todolist', indexTodoList);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
