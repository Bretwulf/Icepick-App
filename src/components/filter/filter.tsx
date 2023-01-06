import React, { useContext } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import { iSentences } from "../../types/types";
import MiniCard from "./card/card";
import { StyledFilterSection } from "./styledComponents";

const FilterSection = () => {
    const { sentences } = useContext(sentenceContext)
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
                    {sentences.map((sentence:iSentences)=>
                        <MiniCard type="favorite" sentence={sentence} />
                    ) }
                </ul>
            </div>
        </StyledFilterSection>
    )
}
export default FilterSection;