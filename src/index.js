const express = require('express');
const morgan = require('morgan');
const sass = require('sass');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(morgan('combined'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
