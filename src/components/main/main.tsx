import MainStyled from "./mainStyled";
import img from "../../Assets/Imgs/backgroundMobileAGORA.png";
import imgDesktop from "../../Assets/Imgs/backgroundDesktop.png";
import { useContext, useState } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import SearchInput from "../search/search";
import FilterSection from "../filter/filter";
import { Button } from "../buttons/button";

const Main = () => {
  const { sentences } = useContext(sentenceContext);
  const [random, setRandom] = useState(0);

  const handleClickRandomPhrase = () => {
    const newRandom = Math.floor(Math.random() * sentences.length);
    console.log(newRandom);
    setRandom(newRandom);

    console.log(random);
  };

  return (
    <MainStyled>
      {/* {window.innerWidth < 500 ? (
        <img src={img} alt="backgroundMobile" />
      ) : (
        <img src={imgDesktop} alt="bgDesktop" />
      )} */}
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 768px)"/>
        <img src={img} alt="background" />

      </picture>
      {/* {window.innerWidth > 500 ? (
        <div className="warningDiv">
          <p className="pDivWarning">
            Cadastre-se para ter acesso a mais funcionalidades
          </p>
        </div>
      ) : null} */}
     {/*  <div className="textBox">
        <p className="pTextBox">frase</p>
      </div> */}
      {/* <Button text="Gerar nova frase" onClick={handleClickRandomPhrase} className="buttonNewPhrase" buttonSize="big" buttonStyle="bg-ColorBlue"/>  */}
      {/* <SearchInput/> */}
      {/* <FilterSection/> */}
    </MainStyled>
  );
};
export default Main;
