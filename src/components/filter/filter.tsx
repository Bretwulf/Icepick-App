import React, { useContext, useEffect, useState } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import { userContext } from "../../contexts/userContext/userContext";
import { useUsers } from "../../hooks/useUsers";
import { iSentences } from "../../types/types";
import MiniCard from "./card/card";
import { StyledFilterSection } from "./styledComponents";

interface iFilterSection{
    page: "home" | "profile"
}


const FilterSection = ({page}:iFilterSection) => {
    const { sentences, filterSentences } = useContext(sentenceContext)
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
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Formal</button>
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Engraçada</button>
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Paquera</button>
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Criativas</button>
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Pessoal</button>
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Curiosidade</button>
                    <button type="button" id="buttonLi" onClick={(e)=>filterSentences(e.currentTarget.innerHTML)}>Intimidade</button>
                </div>
                {sentences.length > 0? (
                    <ul>
                        {sentences.map((sentence:iSentences)=>
                            <MiniCard type="favorite" sentence={sentence} key={sentence.id}/>
                        ) }
                    </ul>
                ):(
                    <div>
                        <h2>Ainda não existem frases cadastradas nesta categoria</h2>
                    </div>
                )}
                
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