import React from "react";
import MiniCard from "./card/card";
import { StyledFilterSection } from "./styledComponents";

const FilterSection = () => {

    return(
        <StyledFilterSection>
            <div>
                <div>
                    <button type="button" id="buttonLi">Formal</button>
                    <button type="button" id="buttonLi">Engraçada</button>
                    <button type="button" id="buttonLi">Paquera</button>
                    <button type="button" id="buttonLi">Criativas</button>
                    <button type="button" id="buttonLi">Pessoal</button>
                    <button type="button" id="buttonLi">Curiosidade</button>
                    <button type="button" id="buttonLi">Intimidade</button>
                </div>
                <ul>
                    {/* <MiniCard/>
                    <MiniCard/>
                    <MiniCard/> */}
                </ul>
            </div>
        </StyledFilterSection>
    )
}
export default FilterSection;