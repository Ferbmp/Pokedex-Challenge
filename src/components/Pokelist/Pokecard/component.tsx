import React from "react";
import { Container } from "./style";

interface PokecardProps {
   num: string;
   image: string;
   name: string;
   types: Array<string>;
}

export default function Pokecard({ image, name, types, num }: PokecardProps) {
   return (
      <Container>
         <div className='image-container'>
            <img src={image} alt={name} />
            <p> {` #${num} `}</p>
         </div>
         <div className='info-container'>
            <h1>{name}</h1>
            <div>
               {types.map((type, index) => (
                  <p key={index}>{type}</p>
               ))}
            </div>
         </div>
      </Container>
   );
}
