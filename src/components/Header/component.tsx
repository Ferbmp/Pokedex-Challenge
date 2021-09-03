import React from "react";
import { Container, Content, InputContainer } from "./styles";

interface HeaderProps {
   search: string;
   setSearch: (value: string) => void;
}

export default function Header({ search, setSearch }: HeaderProps) {
   return (
      <Container>
         <Content>
            <div className='title-container'>
               <h1>Pokédex</h1>
            </div>
            <InputContainer>
               <input
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search for Name or Number 🔍'
               />
            </InputContainer>
         </Content>
      </Container>
   );
}
