import axios from "axios";
import React, { createContext, useEffect } from "react";
import { iSentences } from "../../types/types";
import { useState } from "react";
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

export const sentenceContext = createContext({} as iSentenceContext);

const SentenceProvider = ({ children }: iContextProps) => {
  const [sentences, setSentences] = useState<iSentences[]>([]);
  useEffect(() => {
    axios
      .get("https://kenzie-icebreaker-api.onrender.com/sentences")
      .then((response) => setSentences(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <sentenceContext.Provider
      value={{
        sentences,
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
