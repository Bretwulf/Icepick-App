import MainStyled from "../../styles/mainStyled";
import { GlobalStyle } from "../../styles/globalStyles";
import elipse1 from "../../Assets/Imgs/elipse1.svg";
import elipse2 from "../../Assets/Imgs/elipse2.svg";
import elipse3 from "../../Assets/Imgs/elipse3.svg";
import bgdecoration from "../../Assets/Imgs/bgdecoration.svg";
import img from "../../Assets/Imgs/backgroundMobileAGORA.png";
import imgDesktop from "../../Assets/Imgs/backgroundDesktop.png";
import { useContext, useEffect, useState } from "react";
import { sentenceContext } from "../../contexts/sentenceContext/sentenceContext";
import { random } from "lodash";
const Main = () => {
  const { sentences } = useContext(sentenceContext);
  /*  console.log(sentences[1].text); */
  const [random, setRandom] = useState(0);

  const handleClickRandomPhrase = () => {
    const newRandom = Math.floor(Math.random() * sentences.length);
    console.log(newRandom);
    setRandom(newRandom);

    console.log(random);
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
        <p className="pTextBox">frase</p>
      </div>
      <button onClick={() => console.log("oi")} className="buttonNewPhrase">
        Nova frase
      </button>
    </MainStyled>
  );
};
export default Main;
