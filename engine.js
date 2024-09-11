const chat = document.querySelector(".chat")
const oi = await fetch("./men.json")
const servidor = await oi.json()

servidor.forEach(dados => {
    console.log(dados)
    const card = document.createElement("p")
    card.classList.add("card")
    card.textContent = dados.nome

    chat.appendChild(card)
});

/*botao.addEventListener("click", ()=>{
            const nome = document.querySelector('#nome').value
            const caracteristicas = document.querySelector('#caracteristicas').value

            fetch('/treino',{
                method: "POST",
                body: JSON.stringify({nome:nome, caracteristicas:caracteristicas})
            })
        })*/