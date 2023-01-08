import MainStyled from "./mainStyled";
import img from "../../Assets/Imgs/backgroundMobileAGORA.png";
import imgDesktop from "../../Assets/Imgs/backgroundDesktop.png";
import { useContext, useState, useEffect } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import SearchInput from "../search/search";
import FilterSection from "../filter/filter";

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
      {window.innerWidth < 500 ? (
        <img src={img} alt="backgroundMobile" />
      ) : (
        <img src={imgDesktop} alt="bgDesktop" />
      )}
      {window.innerWidth > 500 ? (
        <div className="warningDiv">
          <p className="pDivWarning">
            Cadastre-se para ter acesso a mais funcionalidades
          </p>
        </div>
      ) : null}
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
