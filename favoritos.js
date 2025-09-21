const favoritos = [
    {
        "numero": 1,
        "nome":"pikachu", 
        "tipo":"eletrico",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        "numero": 2,
        "nome":"squirtle", 
        "tipo":"agua",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        "numero": 3,
        "nome":"bulbasaur", 
        "tipo":"grama",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "numero": 4,
        "nome":"charmander", 
        "tipo":"fogo",
        "imagem":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    }
]

console.log(favoritos)

const jsonFavoritos = JSON.stringify(favoritos)

console.log(jsonFavoritos)

localStorage.setItem("listaPokemomFav", jsonFavoritos)