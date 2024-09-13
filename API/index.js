const http = require('http');
const fs = require("fs")


const server = http.createServer((pedido, resposta) => {
    const url = pedido.url
    console.log(url)
    switch (url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync("./index.html"))
            break;

        case '/index.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync("./index.css"))
            break;

        case '/img/logo.jpeg':
            resposta.writeHead(200, { "Content-Type": "image/jpeg" });
            resposta.end(fs.readFileSync("./img/logo.jpeg"))
            break;

        case '/engine.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" });
            resposta.end(fs.readFileSync("./engine.js"))
            break;

        case '/treino':
            pedido.on('data', (dados) => {
                //parece que o erro está por aqui "pq o codigo para de ser executado aqui"
                const dadosDoBanco = JSON.parse(fs.readFileSync('./mensage.json'))
                //----------------
                const novosDados = JSON.parse(dados)

                dadosDoBanco.push(novosDados)

                fs.writeFileSync('mensage.json', JSON.stringify(dadosDoBanco));
            })
            break;

        
            case '/mensage.json':
                resposta.writeHead(200, { "Content-Type": "application/json" });
                resposta.end(fs.readFileSync("./mensage.json"))
                break;
    }
})

server.listen(3000, /*"ipconfig"*/)