

import { PokemonChild } from "./PokemonChild";

const pokemon = new PokemonChild();

pokemon.fetchPokemons().then(() => {
    
    var {url} = pokemon.pokemons.filter(pok => pok.name == "pidgeotto")[0];
    
    console.log("pidgeotto", url);
});

