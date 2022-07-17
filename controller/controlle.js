//controller do index.js
const express = require("express");
module.exports = {
    async index(request, response) {
        return response.render("index.html");

    }
}







