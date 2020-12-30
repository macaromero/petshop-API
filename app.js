var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
dotenv.config();

//Requerimiento de archivos de rutas y middlewares
const register = require("./routes/register");
const login = require("./routes/login");
const {secured} = require("./middlewares/login");
const productos = require("./routes/productos");
const categorias = require("./routes/categorias");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use("/register", register);
app.use("/login", login);
app.use("/admin/productos", secured, productos);
app.use("/admin/categorias", secured, categorias);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Respuesta de error
  res.status(err.status || 500);
  console.log(err);
});

module.exports = app;