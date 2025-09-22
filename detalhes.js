const detalhes = 
    {
        "numero": "1",
        "nome":"pikachu", 
        "hp": "35",
        "ataque": "55",
        "peso": "6",
        "altura": "0.4",
        "tipo":"elétrico",
        "descricao":"When several of these POKéMON gather, their electricity could build and cause lightning storms.",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "evolution-chain":["pichu", "pikachu", "raichu"]
    }

console.log(detalhes)

const jsonDetalhes = JSON.stringify(detalhes)

console.log(jsonDetalhes)

localStorage.setItem("pokemom", jsonDetalhes);