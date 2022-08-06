const path = require('path')
const express = require('express')
const routes = require('./controllers')
const exphbs = require('express-handlebars')
const helpers = require('./utils/helpers')

const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(routes)
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})
