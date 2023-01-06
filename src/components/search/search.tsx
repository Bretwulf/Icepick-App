import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledInputSearchBox } from "./styledComponents";

const SearchInput = () => {

    return(
        <StyledInputSearchBox>
            <input type="text" placeholder="Digitar Pesquisa"/>
            <button><AiOutlineSearch/></button>
        </StyledInputSearchBox>
    )
}
export default SearchInput;