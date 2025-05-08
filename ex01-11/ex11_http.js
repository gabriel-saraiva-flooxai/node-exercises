const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/html"})
    res.end('<h1> Acho melhor usar Express </h1>')
})

const porta = 3456
server.listen(porta, function() {
    console.log(`Escutando a porta ${porta}`);
})