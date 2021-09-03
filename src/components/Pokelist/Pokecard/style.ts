import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   max-width: 240px;
   border-radius: 8px;
   height: 100%;

   display: flex;
   flex-direction: column;
   margin: 24px 16px;
   transition: all 0.25s;
   &:hover {
      box-shadow: rgb(0 0 0 / 30%) 5px 5px 10px,
         rgb(255 255 255) -5px -5px 10px 5px;
   }

   div.image-container {
      border-radius: 8px;

      background-color: var(--grey);
      display: flex;
      justify-content: space-around;
      align-items: center;

      image {
         object-fit: cover;
         width: 100%;
         height: 100%;
      }
   }

   div.info-container {
      padding: 12px 16px;
      width: 100%;
      height: 148px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      div {
         display: flex;
         width: 100%;
         background-color: var(--grey);

         p {
            margin: 0px 8px;
            font-weight: 500;
         }
      }

      h1 {
         font-size: 1.5rem;
         margin-bottom: 0.5rem;
      }
   }
`;
