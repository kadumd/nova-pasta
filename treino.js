const http = require('http');
const fs = require("fs")


const server = http.createServer((pedido, resposta) => {
    const url = pedido.url
    console.log(url)
    switch (url) {
        case '/treino':
            pedido.on('data', (dados) => {
                let dadosDoBanco = JSON.parse(fs.readFileSync('./mensage.json'))
                let novosDados = JSON.parse(dados)

                dadosDoBanco.push(novosDados)

                fs.writeFileSync('mensage.json', JSON.stringify(dadosDoBanco));
            })
            break;
    }
})