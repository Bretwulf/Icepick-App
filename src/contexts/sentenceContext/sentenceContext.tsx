import { AxiosError } from "axios";
import React, { createContext, useState, useEffect } from "react";
import { Toast } from "../../components/toast";
import { useLoading } from "../../hooks/useLoading";
import { useModal } from "../../hooks/useModal";
import { API } from "../../services/axios";
import { iSentences } from "../../types/types";
import { iLoginError } from "../userContext/userContext";

interface iContextProps {
  children: React.ReactNode;
}

interface idataEdit {
  text: string,
  type: string
}

interface iSentenceContext {
  sentences: iSentences[];
  addSentence: (sentence: iSentences) => void;
  deleteSentence: (id: number) => void;
  likeSentence: (frase:iSentences) => void;
  editSentence: (data: idataEdit, id: string) => void;
}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({ children }: iContextProps) => {
  const { toggleLoading } = useLoading();
  const {closeModal} = useModal();

  const [sentences, setSentences] = useState<iSentences[]>([]);

  async function getSentences () {
    const allSentences =  await API.get("sentences")

    setSentences(allSentences.data)
  }
  
  useEffect(() => {
    
    getSentences()
  }, []);
  
  const addSentence = () => {};
  
  const likeSentence = () => {};

  const editSentence = async (data: idataEdit, id: string) => {
    try {
      toggleLoading(true);
      const response = await API.patch(`sentences/${id}`, data)
      closeModal()
      getSentences()
      console.log(response)
      
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response?Toast(typedError.response!.data, "error"):Toast("Oops, tivemos um problema", "error")
    } finally {
      toggleLoading(false);
    }
    

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
