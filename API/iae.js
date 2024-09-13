export default function handler(pedido, resposta) {
    if (pedido.url === '/treino') {
        console.log("oi")
    } else {
        resposta.status(405).json({ message: 'Método não permitido' });
    }
}