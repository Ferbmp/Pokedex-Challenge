import axios from "axios";
import type { GetStaticProps } from "next";
import { useState } from "react";
import Header from "../components/Header/component";
import Pokelist from "../components/Pokelist/component";

type Evolution = {
   name: string;
   num: string;
};

export type Pokemon = {
   avg_spawns: number;
   candy: string;
   egg: string;
   height: string;
   id: number;
   img: string;
   multipliers?: Array<number>;
   name: string;
   num: string;
   next_evoluiton: Array<Evolution>;
   spawn_chance: number;
   spawn_time: string;
   type: Array<string>;
   weaknesses: Array<string>;
   weight: string;
};

interface HomeProps {
   data: Pokemon[];
}
export default function Home({ data }: HomeProps) {
   console.log(data);
   const [searchValue, setSearchValue] = useState("");
   return (
      <>
         <Header search={searchValue} setSearch={setSearchValue} />
         <Pokelist search={searchValue} list={data} />
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const { data } = await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
   );

   return { props: { data: data.pokemon } };
};
