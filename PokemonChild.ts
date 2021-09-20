import { PokemonObj } from "./PokemonObj";
import { PokemonParent } from "./PokemonParent";
import "isomorphic-fetch"

export class PokemonChild extends PokemonParent {

    pokemons: PokemonObj[] = [];

    constructor() {
        super();
    }

    async fetchPokemons(): Promise<void> {
        const response = await fetch(this.url);
        const obj = await response.json();
        this.pokemons = [];
        for (let pokemon of obj.results) {
            this.pokemons.push(pokemon);
        }
    }

}
