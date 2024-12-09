const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const moment = require('moment');
const cors = require('cors');

const pluviometerRoutes = require('./routes/pluviometer.routes');
const dadosRoutes = require('./routes/dados.routes');

// Initializations
const app = express(); 
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: {
        json: function(context) {
            return JSON.stringify(context);
        }
    }    
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        res.locals.user = req.user || null;
        next();
    });

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));
app.use(pluviometerRoutes);
app.use(dadosRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;