const express = require('express');
const app = express();

app.set("view engine" , "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS Usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples" 
        },
    ];

    const subtitle = "Esta página recebe os dados de forma dinâmica do meu BackEnd em Node.js e Express.js"
    res.render("pages/index", {
        // Renderizando a página index levando o array items
        qualitys: items,
        subtitle: subtitle
    });
})

app.get("/pages/about", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log('Rodando...');