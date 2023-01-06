import React, { createContext, useContext } from "react";
import { iSentences } from "../types/types";
import { API } from '../services/axios';
import { loadingContext } from './loadingContext';

interface iContextProps {
  children: React.ReactNode;
}

interface iSentenceContext {
  sentences: iSentences[];
  add: (sentence: iSentences) => void;
  delete: (id: number) => void;
  like: (id: number) => void;
  edit: (id: number) => void;
}

const sentenceContext = createContext({} as iSentenceContext);




const SentenceProvider = ({ children }: iContextProps) => {
  const {toggleLoading } = useContext(loadingContext);
  
  return (
    <sentenceContext.Provider
      value={{
        sentences: [],
        add: () => {},
        delete: () => {},
        like: () => {},
        edit: () => {},
      }}
    >
      {children}
    </sentenceContext.Provider>
  );
};

export default SentenceProvider;
