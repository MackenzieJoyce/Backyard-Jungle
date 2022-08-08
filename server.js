const path = require('path');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
var bodyParser = require('body-parser');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.use(express.json());
// app.use(require('body-parser').urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})
