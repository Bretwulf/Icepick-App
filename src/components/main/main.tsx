import MainStyled from "./mainStyled";

import img from "../../Assets/Imgs/BgMoblie.jpg";
import imgDesktop from "../../Assets/Imgs/BgDesktop.jpg";
import { useState } from "react";
import SearchInput from "../search/search";
import FilterSection from "../filter/filter";
import { Button } from "../buttons/button";
import { useSentece } from "../../hooks/useSentence";
import { useUsers } from "../../hooks/useUsers";

const Main = () => {

  const { sentences } = useContext(sentenceContext);
  const [phrase, setPhrase] = useState("");
  useEffect(() => {
    if (sentences.length > 0) {
      const newRandom = Math.floor(Math.random() * sentences.length);
      setPhrase(sentences[newRandom].text);
    }
  }, [sentences]);
  const handleClickRandomPhrase = () => {
    const newRandom = Math.floor(Math.random() * sentences.length);
    setPhrase(sentences[newRandom].text);
  };

  return (
    <MainStyled>
      <div className="containerBackground">
        <picture>
          {<source srcSet={imgDesktop} media="(min-width: 768px)" />}
          <img src={img} alt="background" />
        </picture>
      </div>

      {!user && (
        <div className="warningDiv">
          <p className="pDivWarning">
            Cadastre-se para ter acesso a mais funcionalidades
          </p>
        </div>
      )}

      <div className="textBox">


        <p className="pTextBox">{phrase}</p>
      </div>
      <button onClick={handleClickRandomPhrase} className="buttonNewPhrase">
        {" "}
        Gerar nova frase
      </button>
      <SearchInput />
      <FilterSection page="home" />
    </MainStyled>
  );
};
export default Main;
