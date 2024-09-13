export default function handler(req, res) {
  if (req.url === '/treino') {
    const data = req.body; // Supondo que você envie dados no corpo da requisição
    // Fazer algo com os dados
    data.on('data', (dados) => {
      //parece que o erro está por aqui "pq o codigo para de ser executado aqui"
      const dadosDoBanco = JSON.parse(fs.readFileSync('./mensage.json'))
      //----------------
      const novosDados = JSON.parse(dados)

      dadosDoBanco.push(novosDados)

      fs.writeFileSync('mensage.json', JSON.stringify(dadosDoBanco));
  })
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
