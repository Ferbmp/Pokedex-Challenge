import React from "react";
import { Pokemon } from "../../pages";
import { Container } from "./styles";
import Pokecard from "./Pokecard/component";

interface PokelistProps {
   list: Pokemon[];
   search: string;
}

export default function Pokelist({ list, search }: PokelistProps) {
   const filteredList = list.filter(
      (pokemon) =>
         pokemon.name?.toLowerCase().indexOf(search) > -1 ||
         pokemon.num?.toLowerCase().indexOf(search) > -1
   );
   console.log("filteredList", filteredList);

   return (
      <>
         <Container>
            {filteredList.length > 0 ? (
               filteredList.map((pokemon, index) => (
                  <Pokecard
                     key={index}
                     num={pokemon.num}
                     name={pokemon.name}
                     image={pokemon.img}
                     types={pokemon.type}
                  />
               ))
            ) : (
               <h1>👎🏼 🔍 No results for your search </h1>
            )}
         </Container>
      </>
   );
}
