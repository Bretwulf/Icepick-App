import React, { createContext, useState, useEffect } from "react";
import { API } from "../../services/axios";
import { iSentences } from "../../types/types";

interface iContextProps {
  children: React.ReactNode;
}

interface idataEdit {
  sentence: string,
  type: string
}

interface iSentenceContext {
  sentences: iSentences[];
  /* setSetences: React.Dispatch<React.SetStateAction<iSentences[]>>, */
  addSentence: (sentence: iSentences) => void;
  deleteSentence: (id: number) => void;
  likeSentence: (id: number) => void;
  editSentence: (data: idataEdit, id: number) => void;
}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({ children }: iContextProps) => {
  const [sentences, setSentences] = useState<iSentences[]>([]);

  useEffect(() => {
    async function getSentences () {
      const allSentences =  await API.get("sentences")

      setSentences(allSentences.data)
    }
    
    getSentences()
  }, []);

  
  
  const addSentence = () => {};
  const likeSentence = () => {};

  const editSentence = (data: idataEdit, id: number) => {
    
    API.patch(`sentences/${id}`, JSON.stringify(data))

  };

  const deleteSentence = () => {};

  return (
    <sentenceContext.Provider
      value={{
        sentences,
        addSentence,
        deleteSentence,
        likeSentence,
        editSentence,
      }}
    >
      {children}
    </sentenceContext.Provider>
  );
};

export default SentenceProvider;
