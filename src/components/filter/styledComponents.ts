import styled from "styled-components";

export const StyledInputSearchBox = styled.fieldset`
    width: 90%;
    max-width: 35.875rem;

    margin: 0 auto;

    border: none;

    background-color: none;
    position: relative;
    input{
        width: 100%;
        height: 2.5rem;

        padding: 0.563rem;

        border-radius: 0.938rem;
        box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.10);
        outline-color: var(--Color-Blue);
    }
    input::placeholder{
        font-size: 1rem;
        color: var(--Grey-3);
    }
    button{
        position: absolute;
        top: 20%;
        right: 1rem;
        background: none;
        border: none;
    }
    svg{
        font-size: 1.375rem;
    }
    
    
`