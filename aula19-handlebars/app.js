const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config
    // Template Engine
        app.engine('handlebars', handlebars({dafaultlayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o Banco de Dados MySQL
        const sequelize = new Sequelize('test', 'root', '2204', {
            host: 'localhost',
            dialect: 'mysql'
        })

    // Rotas
        app.get('/cad', (req,res)=>{
            res.render('formulario')
        })
    
// ----------------
app.listen(8081, () => {
    console.log('O seu servidor está rodando na Url http://localhost:8081')
})