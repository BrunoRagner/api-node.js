
var express = require("express");


const router = express.Router();
const controller = require("../controller/controller");
const controller = require("../controller/controlle");
const { response } = require("express");




router.get('/test', function(request, response) {
   response.sendFile(__dirname + './views/index.html');

    console.log("Servidor rodando em http://localhost:3000");
     

});







router.get('/lua/Github/:name',  controller.luaGithub);



module.exports = router;