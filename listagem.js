const listarPokemons = [
    {
        "numero": 1,
        "nome":"pikachu", 
        "tipo":"eletrico",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "favoritado": "false"
    },
    {
        "numero": 2,
        "nome":"squirtle", 
        "tipo":"agua",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "favoritado": "true"
    },
    {
        "numero": 3,
        "nome":"bulbasaur", 
        "tipo":"grama",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "favoritado": "true"
    },
    {
        "numero": 4,
        "nome":"charmander", 
        "tipo":"fogo",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "favoritado": "false"
    }
]

console.log(listarPokemons)

const jsonListarPokemom = JSON.stringify(listarPokemons)

console.log(jsonListarPokemom)

localStorage.setItem("listaPokemom", jsonListarPokemom)


