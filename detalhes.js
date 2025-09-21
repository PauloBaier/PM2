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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var DetalhesPokemom = JSON.parse(localStorage.getItem("pokemom"))
preencherCardDetalhes(DetalhesPokemom)


function preencherCardDetalhes(pokemom){
    var nome = document.getElementById("nome-pokemom")
    var img = document.getElementById("imagem-pokemom")
    var hp = document.getElementById("hp")
    var ataque = document.getElementById("ataque")
    var peso = document.getElementById("peso")
    var altura = document.getElementById("altura")
    var tipo = document.getElementById("tipo")
    var descricao = document.getElementById("descricao")
    var evo = document.getElementsByClassName("evo")

    nome.textContent = pokemom.nome
    img.src = pokemom.imagem
    hp.textContent = pokemom.hp
    ataque.textContent = pokemom.ataque
    peso.textContent = pokemom.peso + " KG"
    altura.textContent = pokemom.altura + " M"
    tipo.textContent = pokemom.tipo
    descricao.textContent = pokemom.descricao
    Array.from(evo).forEach((e,index) => {
        e.textContent = pokemom["evolution-chain"][index]
    })
}