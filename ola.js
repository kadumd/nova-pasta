const fs = require('fs')

const textArea = document.querySelector(".mensagem")
textArea.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const nome = textArea.value

        let dadosDoBanco = JSON.parse(fs.readFileSync('./mensage.json'))
        let novosDados = JSON.parse(dados)

        dadosDoBanco.push(novosDados)

        fs.writeFileSync('mensage.json', JSON.stringify(dadosDoBanco));
    }
})