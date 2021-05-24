/* Frameworks são ferramentas que facilitam o nosso trabalho para utilizar uma tecnologia, como o node.

Express - é uma framework que auxilia na criação de aplicações web com back-end, utilizando o NodeJS. É a principal framework para trabalhar com Node.

Ele é MINIMALISTA, ou seja, é bem simples, tem um ótimo Workflow, trasz poucos recursos mas é muito fácil de implementar uma aplicação com ele.

Já um framework Full-stack tem bem mais recursos, mas é mais difícil de implementar em um projeto.

Para instalar o express, basta entrar na pasta do seu projeto através do cmd, e digitar:

npm install express --save
*/

const express = require("express")
const app = express()

//ROTAS - o express é orientado a rotas
app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/ola/:cargo/:nome/:cor", function(req,res){
    res.send("<h1> Ola "+req.params.nome+"</h1> <br>"+"<h2> O seu cargo eh "+req.params.cargo+"</h2> <br>"+"<h3> A sua cor favorita eh "+req.params.cor+" </h3>")

    /* Isso não funciona, pois o .send só pode ser usado uma vez
    res.send("<h2> O seu cargo eh "+req.params.cargo+"</h2>")
    res.send("<h3> A sua cor favorita eh "+req.params.cor+" </h3>")
    */
})

// Isso colocar o server pra rodar, mas deve sempre ser a última linha de código.
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})
