import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    :root{
            --background:#ffffff;
            --orange: #fd7d24;
            --purple:#b97fc9;
            --grey:  #f2f2f2;
            --blue: #115D8C;
            --green: #9bcc50;
    
            
            --text: #868686;


            --padding: 0px 80px

        }
    * {
        margin: 0px;
        padding: 0px; 
        box-sizing: border-box
    }
    html{
        
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body, input, textarea, button{
        font-family: 'Saira', sans-serif;
        font-weight: 300;
        font-size: 16px
    }
    h1{
        font-size: 16px
    }

    body{ 
        background: var(--background); 
        -webkit-font-smoothing:antialiased;

    }
    button, a{ 
        text-decoration: none;
        cursor: pointer;
    }

`;
