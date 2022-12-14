const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const session = require('express-session');

const hbs = handlebars.create({
  partialsDir: ['.src/views/partials']
});

//rotas
const UserRoute = require('./src/routes/userRoute');
const CarRoute = require('./src/routes/carRoute');
//Model
const db = require('./src/models/db');

app.use(express.json());
app.use(session({ secret: 'asdpfjasofapjf' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine Setup
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/src/public'));

app.use('/users', UserRoute);
app.use('/cars', CarRoute);

app.get('/', (req, res) => {
  res.redirect('users/login');
});
app.get(
  '/home',
  (req, res, next) => {
    if (req.session.login) {
      return next();
    }
    res.redirect('users/login');
  },
  (req, res) => {
    res.render('home');
  }
);

db.sync()
  .then(() => {
    app.listen(3333);
  })
  .catch(err => {
    console.log(err);
  });
