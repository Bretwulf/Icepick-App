import { AxiosError } from "axios";
import { cloneDeep } from "lodash";
import React, { createContext, useState, useEffect, useContext } from "react";
import { Toast } from "../../components/toast";
import { useLoading } from "../../hooks/useLoading";
import { useModal } from "../../hooks/useModal";
import { API } from "../../services/axios";
import { iSentences, iSentencesAdd } from "../../types/types";
import { iLoginError, userContext } from "../userContext/userContext";

interface iContextProps {
  children: React.ReactNode;
}
interface idataEdit {
  text: string;
  type: string;
}

interface iSentenceContext {
  sentences: iSentences[];
  addSentence: (data: iSentencesAdd, id: number) => void;
  deleteSentence: (id: number) => void;
  editSentence: (data: idataEdit, id: number) => void;
  search: string;
  filtradedSentences: iSentences[];
  favoriteSentence: (sentence: iSentences, id: number) => void;
  unfavoriteSentence: (sentence: iSentences, id: number) => Promise<void>;

  favoritedUserSentences: iSentences[];
  getSentences:()=>void;

}

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({ children }: iContextProps) => {
  const [profileSentences, setProfileSentences] = useState<iSentences[]>([]);
  const { user, get } = useContext(userContext);
  const [sentences, setSentences] = useState<iSentences[]>([]);
  const [search, setSearch] = useState("")
  const [ favoritedUserSentences, setFavoriteduserSentences ] = useState<iSentences[]>([])
  const [ filtradedSentences, setFilteredSentences ] = useState<iSentences[]>([])
  const { toggleLoading } = useLoading();
  const { closeModal } = useModal();


  async function getSentences () {
    const allSentences =  await API.get<iSentences[]>("sentences")

  setSentences(allSentences.data)
    
  }
  useEffect(() => {
    if(user?.favoriteSentences){
      setFavoriteduserSentences(user!.favoriteSentences)
    }
    getSentences()
  }, [user]);

  const addSentence = async (data: iSentencesAdd, id: number) => {
    try {
      toggleLoading(true);
      const fullData = {
        userId: id,
        like: 0,
        liked: false,
      };
      await API.post(`sentences/`, { ...data, ...fullData });
      closeModal();
      getSentences();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const editSentence = async (data: idataEdit, id: number) => {
    try {
      toggleLoading(true);
      await API.patch(`sentences/${id}`, data);
      closeModal();
      await getSentences();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const deleteSentence = async (id: number) => {
    toggleLoading(true);
    try {
      await API.delete(`sentences/${id}`);
      Toast("Frase deletada com sucesso.", "sucess");
      closeModal();
      await getSentences();
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const responseLike = async (sentence: iSentences, type:string) => {
    let data={
      like: sentence.like
    }
    if(type === "+"){
      data.like = sentence.like + 1
    } else{
      data.like = sentence.like - 1
    }
    
    try {
      const response = await API.patch(`sentences/${sentence.id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  /* const likeSentence = async (frase: iSentences) => {
    const newSentence = filtradedSentences.map((sentence) => {
      if (sentence.id === frase.id) {
        if (!sentence.liked) {
          let newSentences = responseLike(sentence);
          
          return { ...newSentences, ...sentence, liked: true };
        } /* else{
            return {...newSentences,/*  like: sentence.like - 1,  liked: false}
          } 
      }
      return sentence;
    });
    console.log(newSentence);
    setSentences(newSentence);
  }; */

  /* const renderFilterAndSearchSentences = (
    searchValue: string,
    clickedButton?: string
  ) => {
    if (searchValue !== "") {
      setSearch(searchValue);
      const sentencesSearched =
        sentences.filter((sentence) =>
          sentence.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) ||
        sentences.filter((sentence) =>
          sentence.type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
      setFilteredSentences(sentencesSearched);
    } else if (searchValue === "") {
      setFilteredSentences(sentences);
    } else if (clickedButton) {
      if (clickedButton === "Todas") {
        setFilteredSentences(sentences);
      } else {
        const sentencesFiltred = sentences.filter(
          (sentence) => sentence.type === clickedButton
        );
        setFilteredSentences(sentencesFiltred);
      }
    }
  }; */
  const favoriteSentence = async (sentence: iSentences, id: number) => {
    
    const newFavorites = cloneDeep(user!.favoriteSentences);
    newFavorites.push(sentence)
   
    try {
      toggleLoading(true);
      await API.patch(`users/${id}`, { favoriteSentences: newFavorites });
      closeModal();
      await responseLike(sentence, "+")
      /* await getSentences(); */
      await get(id);
      const newSentence = sentences.map((sentence)=>{
        let favoriteArray:iSentences = {} as iSentences
        favoritedUserSentences.forEach((favoriteSentence:iSentences)=>{
            if(favoriteSentence.id === sentence.id){
              favoriteArray = {...sentence,  liked: true}
            }else{
              favoriteArray = {...sentence,  liked: false}
            }
          }) 
          return favoriteArray
      }) 
      setSentences(newSentence)
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  const unfavoriteSentence = async (sentence: iSentences, id: number) => {
    const newFavorites = cloneDeep(user!.favoriteSentences)
    const newFavoritesFiltered = user!.favoriteSentences.filter(
      (sentenceParam) => sentenceParam.id !== sentence.id
    );
    try {
      toggleLoading(true);
      await API.patch(`users/${id}`, { favoriteSentences: newFavoritesFiltered });
      closeModal();
      await responseLike(sentence, "-")
      /* await getSentences(); */
      await get(id);
      const newSentence = sentences.map((sentence)=>{
        let favoriteArray:iSentences = {} as iSentences
        favoritedUserSentences.forEach((favoriteSentence:iSentences)=>{
            if(favoriteSentence.id === sentence.id){
              favoriteArray = {...sentence,  liked: true}
            }else{
              favoriteArray = {...sentence,  liked: false}
            }
          }) 
          return favoriteArray
      }) 
      setSentences(newSentence)
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      typedError.response
        ? Toast(typedError.response!.data, "error")
        : Toast("Oops, tivemos um problema", "error");
    } finally {
      toggleLoading(false);
    }
  };

  return (
    <sentenceContext.Provider
      value={{
        sentences,
        addSentence,
        deleteSentence,
        editSentence,
        search,
        filtradedSentences,
        favoriteSentence,
        unfavoriteSentence,

        favoritedUserSentences,
        getSentences

      }}
    >
      {children}
    </sentenceContext.Provider>
  );
};

export default SentenceProvider;
