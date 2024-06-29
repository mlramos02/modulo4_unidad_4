var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio', message: '¡Bienvenido!' });
});

router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'Servicios', message: 'Esta es la página de servicios.' });
});

router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Galería', message: 'Aquí está la información de galería.' });
});

router.get('/novedades', function(req, res, next) {
  res.render('novedades', { title: 'Novedades', message: 'Aquí está la información de novedades.' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto', message: 'Aquí está la información de contacto.' });
});

/* Ruta con parámetro */
router.get('/usuarios/:username', function(req, res, next) {
  const username = req.params.username;
  res.render('usuarios', { title: 'Saludos', message: `¡Hola, ${username}!` });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST login credentials */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  // Aquí puedes añadir la lógica de autenticación
  if (username === 'admin' && password === '1234') {
    res.send('Inicio de sesión exitoso');
  } else {
    res.send('Credenciales incorrectas');
  }
});

module.exports = router;
