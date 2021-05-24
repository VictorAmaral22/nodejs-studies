const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "2204", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!")
}).catch((error) =>{
    console.log("Ocorreu um erro: "+error)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
        /* String tem um limite de caracteres...*/
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Postagem.sync({force: true})

/*  Basicamente um INSERT INTO 
Postagem.create({
    titulo: "Um título qualquer!",
    conteudo: "ajsdnikasncaikwncalkwnalow lorem impsum"
})
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})
Usuario.create({
    nome: "Victor",
    sobrenome: "Tavares",
    idade: 19,
    email: "victortavamaral@gmail.com"
})