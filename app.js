const express = require("express");

//aplicación

const app = express();

//requests

app.listen(3000);

app.get("/", (req,res) =>{

    //res.send("<p> Pagina Principal con Nodemon</p>");
    res.sendFile("./visualizacion/index.html", {root:__dirname});
});

app.get("/about", (req,res) =>{

    //res.send("<p> About con Nodemon</p>");
    res.sendFile("./visualizacion/about.html", {root:__dirname});


});

app.get("/404", (req,res) =>{

    //res.send("<p> 404 con Nodemon</p>");
    res.sendFile("./visualizacion/404.html", {root:__dirname});


});
