import React from "react";
import { AiOutlineStar } from 'react-icons/ai';
import { StyledCard } from "./styledComponents";

type tTypeCard= "created" | "favorite"

const MiniCard = (type:tTypeCard) => {
    if(type === "created"){
        return(
            <StyledCard>
            <div>
                <p>O que você faria se fosse passar 24h no corpo de alguém do sexo oposto?</p>
            </div>
            <div>
                <AiOutlineStar/>
                <span>3</span>
            </div>
        </StyledCard>
        )
    }
    return(
        <StyledCard>
            <div>
                <p>O que você faria se fosse passar 24h no corpo de alguém do sexo oposto?</p>
            </div>
            <div>
                { }
                <AiOutlineStar/>
                <span>3</span>
            </div>
        </StyledCard>
    )
}
export default MiniCard;