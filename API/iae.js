export default function handler(pedido, resposta) {
    if (pedido.url === '/treino') {
        pedido.on('data', (dados) => {
            const fs = require("fs")
            //parece que o erro está por aqui "pq o codigo para de ser executado aqui"
            const dadosDoBanco = JSON.parse(fs.readFileSync('./mensage.json'))
            //----------------
            const novosDados = JSON.parse(dados)

            dadosDoBanco.push(novosDados)

            fs.writeFileSync('mensage.json', JSON.stringify(dadosDoBanco));
        })
    } else {
        resposta.status(405).json({ message: 'Método não permitido' });
    }
}