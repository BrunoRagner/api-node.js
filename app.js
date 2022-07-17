var path = require('path')
const express = require("express");

const app = express();
const Router = require("./router/router");




app.use(Router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err :
    {};
    res.status(err.status || 500);
    res.render('error');
    });





app.listen(3000, function(request, response)  {
    console.log("Servidor rodando em http://localhost:3000");
});


