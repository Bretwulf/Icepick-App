import styled from "styled-components";

export const StyledInputSearchBox = styled.fieldset`
    width: 90%;
    max-width: 574px;

    margin: 0 auto;

    border: none;

    background-color: none;
    position: relative;
    input{
        width: 100%;
        height: 40px;

        padding: 9px;

        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
        outline-color: var(--Color-Blue);
    }
    input::placeholder{
        font-size: 16px;
        color: var(--Grey-3);
    }
    button{
        position: absolute;
        top: 20%;
        right: 16px;
        background: none;
        border: none;
    }
    svg{
        font-size: 22px;
    }
    
    
`