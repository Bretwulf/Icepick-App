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
  const { sentences } = useSentece();
  const { user } = useUsers();
  const [random, setRandom] = useState(0);

  const handleClickRandomPhrase = () => {
    const newRandom = Math.floor(Math.random() * sentences.length);
    if (newRandom === random) {
      setRandom(newRandom + 1);
    } else {
      setRandom(newRandom);
    }
    console.log(sentences[random]?.text && sentences[random].text);
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
        <p className="pTextBox">{"asdadasd"}</p>
      </div>

      <Button
        text="Gerar nova frase"
        onClick={handleClickRandomPhrase}
        className="buttonNewPhrase"
        buttonSize="big"
        buttonStyle="bg-ColorBlue"
      />

      {user && (
        <>
          <SearchInput />
          <FilterSection page="home" />
        </>
      )}
    </MainStyled>
  );
};
export default Main;
