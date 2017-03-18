//if not on Heroku, use .env variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000; //Use assigned port; otherwise use port 3000
      
const db = require('./config/db'); //database connection settings

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index')); //router index

app.listen(port, function(){
  console.log(`Image SAL listening on port ${port}`);
});
