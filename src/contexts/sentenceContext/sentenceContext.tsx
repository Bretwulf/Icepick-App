import axios, { AxiosError } from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react'
import { API } from '../../services/axios';
import { iSentences } from '../../types/types'
import { userContext } from '../userContext/userContext';

interface iContextProps {
  children: React.ReactNode;
}
interface idataEdit {
  text: string,
  type: string
}
interface iSentenceContext {
  sentences: iSentences[],
  addSentence: (sentence: iSentences) => void;
  deleteSentence: (id: number) => void;
  likeSentence: (frase:iSentences) => void;
  editSentence: (data: idataEdit, id: string) => void;
}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({children}:iContextProps) => {
  const { user } = useContext(userContext)
  const [sentences, setSentences] = useState<iSentences[]>([]);

  async function getSentences () {
    const allSentences =  await API.get<iSentences[]>("sentences")
    const newSentence = allSentences.data.map((sentence)=>{
    
      return {...sentence,  liked: false}
  })
    setSentences(newSentence)
  }
  useEffect(() => {
    getSentences()

  }, []);

  const addSentence = () => {
    
  };
  const responseLike = async (sentence:iSentences)=>{
    const data={
      like: sentence.like + 1
    }
    try {
      const response = await API.patch(`sentences/${sentence.id}`, data)
      console.log(response.data)
      return response.data
    } catch (error) {
     console.log(error)
    }
  }
  
  const likeSentence = async (frase:iSentences) =>{
  
      const newSentence = await sentences.map((sentence)=>{
        if(sentence.id === frase.id){
          if(!sentence.liked){
            let newSentences = responseLike(sentence)
            
            return {...newSentences, liked: true}
          }/* else{
            return {...newSentences,/*  like: sentence.like - 1,  liked: false}
          } */
        }
        return sentence
    }) 
    /* console.log(newSentence) */
    /* setSentences(newSentence) */
  };
  const editSentence = () => {
    
  };
  const deleteSentence = () => {
    
  };

    return ( 
        <sentenceContext.Provider 
        value={{sentences, 
          addSentence,
          deleteSentence,
          likeSentence,
          editSentence }}>
            {children}
        </sentenceContext.Provider>
     );
}
 
export default SentenceProvider;
