import MainStyled from "../../styles/mainStyled";
import { GlobalStyle } from "../../styles/globalStyles";
import elipse1 from "../../Assets/Imgs/elipse1.svg";
import elipse2 from "../../Assets/Imgs/elipse2.svg";
import elipse3 from "../../Assets/Imgs/elipse3.svg";
import bgdecoration from "../../Assets/Imgs/bgdecoration.svg";
import img from "../../Assets/Imgs/backgroundMobileAGORA.png";
import imgDesktop from "../../Assets/Imgs/backgroundDesktop.png";
const Main = () => {
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
        <p className="pTextBox">frase aquiiii</p>
      </div>
      <button className="buttonNewPhrase">Gerar uma nova frase</button>
    </MainStyled>
  );
};
export default Main;
