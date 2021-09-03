import styled from "styled-components";
export const Container = styled.div`
   margin-top: 24px;

   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   div.title-container {
      padding: var(--padding);
      h1 {
         font-size: 2em;
         color: var(--text);
         font-weight: 500;
      }
   }
`;

export const InputContainer = styled.div`
   width: 100%;
   height: 120px;
   background-image: linear-gradient(to left, #313131, #434343);
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   padding: 0px 32px;

   input {
      width: 100%;
      outline: none;
      border-radius: 8px;
      padding: 0.5rem;
      border: none;
   }
`;
