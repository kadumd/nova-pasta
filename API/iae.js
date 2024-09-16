// api/hello.js

export default function handler(pedido, resposta) {
    if (pedido.method === 'POST') {

        pedido.on('data', (dados) => {
            const fs = require("fs")
            //parece que o erro está por aqui "pq o codigo para de ser executado aqui"
            const dadosDoBanco = JSON.parse(fs.readFileSync('./mensage.json'))
            //----------------
            const novosDados = JSON.parse(dados)

            dadosDoBanco.push(novosDados)

            fs.writeFileSync('mensage.json', JSON.stringify(dadosDoBanco));
        })

        resposta.status(200).json({ message: "ola" });
    } else {
        // Responder com erro se o método não for POST
        resposta.status(405).json({ error: 'Method not allowed' });
    }
}