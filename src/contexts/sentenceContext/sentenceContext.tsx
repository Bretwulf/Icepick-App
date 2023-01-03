import React, { createContext, ReactHTMLElement } from 'react'
import { iSentences } from '../../types/types'


interface iContextProps {
    children: React.ReactNode,
}


interface iSentenceContext {
    sentences: iSentences[],
    add: (sentence:iSentences)=>void,
    delete: (id:number)=>void,
    like: ((id:number)=>void),
    edit: ((id:number)=>void)
}

const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({children}:iContextProps) => {
    return ( 
        <sentenceContext.Provider value={{sentences:[],add:()=>{},delete:()=>{},like:()=>{},edit:()=>{}}}>
            {children}
        </sentenceContext.Provider>
     );
}
 
export default SentenceProvider;