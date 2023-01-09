import { AxiosError } from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react'
import { Toast } from '../../components/toast';
import { useLoading } from '../../hooks/useLoading';
import { useModal } from '../../hooks/useModal';
import { API } from '../../services/axios';
import { iSentences, iSentencesAdd } from '../../types/types'
import { iLoginError, userContext } from '../userContext/userContext';

interface iContextProps {
  children: React.ReactNode;
}
interface idataEdit {
  text: string,
  type: string
}

interface iSentenceContext {
  sentences: iSentences[];
  addSentence: (data:iSentencesAdd, id:number) => void;
  deleteSentence: (id: number) => void;
  likeSentence: (frase:iSentences) => void;
  editSentence: (data: idataEdit, id: number) => void;
}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({children}:iContextProps) => {
  const { user } = useContext(userContext)
  const [sentences, setSentences] = useState<iSentences[]>([]);
  const { toggleLoading } = useLoading();
  const {closeModal} = useModal();


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

  const addSentence = async (data:iSentencesAdd, id:number) => {
    try {
      toggleLoading(true);
      const fullData = {
        userId: id,
        like: 0,
        liked: false,
      }
      const response = await API.post(`sentences/`, {...data,...fullData})
      closeModal()
      getSentences()
      
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response?Toast(typedError.response!.data, "error"):Toast("Oops, tivemos um problema", "error")
    } finally {
      toggleLoading(false);
    }
    
  }; 

  const editSentence = async (data: idataEdit, id: number) => {
    try {
      toggleLoading(true);
      const response = await API.patch(`sentences/${id}`, data)
      closeModal()
      getSentences()
      
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response?Toast(typedError.response!.data, "error"):Toast("Oops, tivemos um problema", "error")
    } finally {
      toggleLoading(false);
    }
  
  };

  const deleteSentence = async(id:number) => {
    toggleLoading(true);
    try {
      await API.delete(`users/${id}`);
      Toast("Frase deletada com sucesso.", "sucess");
      closeModal()
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response?Toast(typedError.response!.data, "error"):Toast("Oops, tivemos um problema", "error")
      
    } finally{
      toggleLoading(false);
    }
  };

  const responseLike = async (sentence:iSentences)=>{
    const data={
      like: sentence.like + 1
    }
    try {
      const response = await API.patch(`sentences/${sentence.id}`, data)
      return response.data
    } catch (error) {
     console.log(error)
    }
  }
  
  const likeSentence = async (frase:iSentences) =>{
  
      const newSentence =  sentences.map((sentence)=>{
        if(sentence.id === frase.id){
          console.log(sentence)
          if(!sentence.liked){
            let newSentences = responseLike(sentence)
            
            return {...newSentences, ...sentence, liked: true}
          }/* else{
            return {...newSentences,/*  like: sentence.like - 1,  liked: false}
          } */
        }
        return sentence
      }) 
    console.log(newSentence)
    setSentences(newSentence)
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
