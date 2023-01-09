import React, { useContext, useEffect, useState } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import { useUsers } from "../../hooks/useUsers";
import { iSentences } from "../../types/types";
import MiniCard from "./card/card";
import { StyledFilterSection } from "./styledComponents";

interface iFilterSection{
    page: "home" | "profile"
}


const FilterSection = ({page}:iFilterSection) => {
    const { sentences } = useContext(sentenceContext)
    const { user } = useUsers()
    const [profileSentences, setProfileSentences] = useState<iSentences[]>([])
    useEffect(() =>{
        if(page === "profile"){

            const sentencesCreated =  sentences.filter((sentence)=> sentence.userId === user?.id)
            setProfileSentences([...sentencesCreated])
        }
    },[sentences])
    
    
    return(
        <StyledFilterSection>
            {page === "home"? (
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
                        <MiniCard type="favorite" sentence={sentence}/>
                    ) }
                </ul>
            </div>
            ):(
                <StyledFilterSection>
                    <div>
                        <div>
                            <button type="button" id="buttonLi">Todas</button>
                            <button type="button" id="buttonLi">Favoritas</button>
                            <button type="button" id="buttonLi">Criadas</button>
                        </div>
                        <ul>
                            {profileSentences.map((sentence:iSentences)=>
                                <MiniCard type="created" sentence={sentence} />
                            ) }
                        </ul>
                    </div>
                </StyledFilterSection> 
            )}
            
        </StyledFilterSection>
    )
}
export default FilterSection;