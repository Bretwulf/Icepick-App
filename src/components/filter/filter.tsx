import React, { useContext, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { StyledInputSearchBox } from "./styledComponents";

const FilterFrases = () => {

    return(
        <StyledInputSearchBox>
            <input type="text" placeholder="Digitar Pesquisa"/>
            <button><FaSearch/></button>
        </StyledInputSearchBox>
    )
}
export default FilterFrases;