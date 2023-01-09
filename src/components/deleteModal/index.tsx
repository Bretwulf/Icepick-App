import DivDelete from "./deleteModalStyled";
import { Button } from "../buttons/button";
const ModalDelete = () => {
  return (
    <DivDelete>
      <button className="btnClose">X</button>
      <p className="pDelete">Deletar Frase</p>
      <p className="confirmDelete">Deseja deletar essa frase?</p>
      <Button text="Deletar" buttonSize="default" buttonStyle="bg-ColorRed" />
    </DivDelete>
  );
};
export default ModalDelete;
