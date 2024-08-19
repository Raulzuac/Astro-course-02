import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { createSignal, Show, type Component } from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}
export const FavPokemon: Component<Props> = (props) => {

const [isVisible, setIsVisible] = createSignal(true);

const imageSRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

const deleteFav = () =>{
    const favorites = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');

    localStorage.setItem('favoritePokemon', JSON.stringify(favorites.filter((pokemon: FavoritePokemon) => pokemon.id !== props.pokemon.id)));
    setIsVisible(false);
}

return (
    <Show when={isVisible()}>

    <div class="flex flex-col justify-center items-center">
        
        <img style={`view-transition-name: ${props.pokemon.name}-image`} src={imageSRC} alt={props.pokemon.name} class="w-20 h-20"/>
        <a href={`/pokemons/${props.pokemon.name}`}>#{props.pokemon.id} <span class="capitalize">{props.pokemon.name}</span></a>
        <button class="bg-red-500 p-2 rounded-md" onClick={deleteFav}>Remove</button>
    </div>
    </Show>
)
}