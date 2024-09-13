const mensagem = document.querySelector(".mensagem")
mensagem.addEventListener('keydown', async (e) => {
    if (e.key === "Enter") {
        const nome = mensagem.value
        
        //o erro tambem pode estar por aqui
    
        fetch('/treino', {
            method: "POST",
            body: JSON.stringify({ nome: nome }),
        })
        //-------------
        const chat = document.querySelector(".chat")
        const oi = await fetch("./mensage.json")
        const servidor = await oi.json()
        chat.textContent = ''
        servidor.forEach(dados => {
            const card = document.createElement("p")
            card.classList.add("card")
            card.textContent = dados.nome

            chat.appendChild(card)
        });
        mensagem.value = ''
    }
})
/*botao.addEventListener("click", ()=>{
            const nome = document.querySelector('#nome').value
            const caracteristicas = document.querySelector('#caracteristicas').value

            fetch('/treino',{
                method: "POST",
                body: JSON.stringify({nome:nome, caracteristicas:caracteristicas})
            })
        })*/