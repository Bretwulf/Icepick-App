import axios, { AxiosError } from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react'
import { API } from '../../services/axios';
import { iSentences } from '../../types/types'

interface iContextProps {
  children: React.ReactNode;
}

interface iSentenceContext {
    sentences: iSentences[],
    /* setSetences: React.Dispatch<React.SetStateAction<iSentences[]>>, */
    add: (sentence:iSentences)=>void,
    delete: (id:number)=>void,
    like: ((id:number)=>void),
    edit: ((id:number)=>void)
}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({children}:iContextProps) => {
  const [sentences, setSentences] = useState<iSentences[]>([]);

  useEffect(() => {
    axios
      .get("https://kenzie-icebreaker-api.onrender.com/sentences")
      .then((response) => setSentences(response.data))
      .catch((err) => console.log(err));
  }, []);
  
  const addSentence = () => {
    
  };
  const likeSentence = () =>{

  };
  const editSentence = () => {
    
  };
  const deleteSentence = () => {
    
  };
      

    return ( 
        <sentenceContext.Provider value={{sentences:[],add:()=>{},delete:()=>{},like:()=>{},edit:()=>{}}}>
            {children}
        </sentenceContext.Provider>
     );
}
 
export default SentenceProvider;
