import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavPokemon } from "./FavPokemon";

const getLocalStoragePokemons = (): FavoritePokemon[] =>{
    const pokemons = localStorage.getItem('favoritePokemon');
    if(pokemons){
        console.log(pokemons);
        return JSON.parse(pokemons);
        
    }
    return [];
}


export const FavoritePokemons = () =>{

    const [favoritePokemons, setFavoritePokemons] = createSignal<FavoritePokemon[]>(getLocalStoragePokemons());
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">

        <For each={favoritePokemons()}>{(pokemon => (<FavPokemon pokemon={pokemon}></FavPokemon>))}
            
        </For>

        </div>
    )
}