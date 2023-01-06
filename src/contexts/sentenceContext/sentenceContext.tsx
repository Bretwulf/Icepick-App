import { AxiosError } from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react'
import { Toast } from '../../components/Toast';
import { API } from '../../services/axios';
import { iSentences } from '../../types/types'
import { userContext } from '../userContext';

interface iContextProps {
    children: React.ReactNode,
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
   /*  const [sentences, setSetences] = useState([] as iSentences[]);
    
    const getAllSetences = async (): Promise<void> => {
        try {
          const response = await API.get(`sentences`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(response.data);
          setSetences(response.data);
        } catch (error) {
          const typedError = error as AxiosError;
          console.log(typedError.response!.data);
        }
      };

      useEffect(()=>{
        getAllSetences()
      }, []) */

      

    return ( 
        <sentenceContext.Provider value={{sentences:[],add:()=>{},delete:()=>{},like:()=>{},edit:()=>{}}}>
            {children}
        </sentenceContext.Provider>
     );
}
 
export default SentenceProvider;