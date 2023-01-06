import React from "react";
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { iSentences } from "../../../types/types";
import { StyledCard } from "./styledComponents";
import EditSentenceForm from "../../editSentenceForm/EditSentenceForm";
import { useModal } from "../../../hooks/useModal";

type tTypeCard= "created" | "favorite"
interface iMiniCard{
    type:tTypeCard,
    sentence: iSentences
}
const MiniCard = ({type, sentence}:iMiniCard) => {
    const { showModal } = useModal()
    return(
        <StyledCard key={sentence.id}>
            <div>
                <p>{sentence.text}</p>
            </div>
            <div>
                {type === "created"? (
                    <>
                        <MdOutlineModeEditOutline onClick={(e) => showModal(<EditSentenceForm sentence={sentence} />)}/>
                        <FiTrash2/>
                    </>
                ):(
                    <>
                        <AiOutlineStar/>
                        <span>3</span>
                    </>
                )}
            </div>
        </StyledCard>
    )
}
export default MiniCard;