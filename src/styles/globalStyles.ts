import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        list-style: none;
    }
    button{
        cursor:pointer;
    } 
    
    :root{
        --Color-primary: #5458F0;
        --Color-primary-2: #52154E;
        --Color-Blue: #56EAF6;
        --Color-Blue-2: #3395E2;
        --Color-Blue-3: #1E3C58;
        --Color-Blue-4: #195E94;
        --Color-Red: #E83F5B;
        --Color-Opacity: rgba(19, 1, 1, 0.5);

        --Grey-3: #646C7A;
        --Grey-2: #ECEFF4;
        --Grey-1: #FFFDFD;
  
        --toastify-text-color-success:#3FE864;
        --toastify-text-color-error: #E83F5B;

        --Border-Radius-1: .5rem;
    }

`;
