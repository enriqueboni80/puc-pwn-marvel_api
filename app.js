var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');
const methodOverride = require('method-override');


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var charactersRouter = require('./routes/characters');
var authRouter = require('./routes/auth');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const adminRouter = require('./routes/admin');

var app = express();
require('./configs/github.strategy');
require('./configs/local.strategy');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
var hbs = exphbs.create({
    helpers: require('./helpers/handlebars'),
    defaultLayout: '../layout',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// necessario para usar as flash-messages
app.use(flash());
app.use(session({
    //1 day = 86400000 milissegundos
    cookie: { maxAge: 86400000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));

// Set passport configs
app.use(require('express-session')({ secret: 'shhhh...', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/characters', charactersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;