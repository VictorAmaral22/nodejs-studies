/* HTTP -> Chamado de Hypertext Transfer Protocol

Ele liga um cliente aos servidores de um site.

----

O módulo tradicional de HTTP do Node é extremamente limitado, por isso se usa frameworks que expandem as possibilidades que temos com o NodeJS. Exemplo de framework:

-Express

----
Neste arquivo, vai mostrar como se usa o http tradicional do node
*/

var http = require("http")

http.createServer(function(req, res){
    res.end("O baguio é doido alek")
}).listen(8081);

console.log("O servidor está rodando!")