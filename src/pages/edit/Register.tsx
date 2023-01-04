import React, { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import { iRegisterRequest } from "../../types/types";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const { register } = useContext(userContext);

  

 

  const registerSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const data: iRegisterRequest = {
      email,
      password,
      username,
      avatar,
    };
    register(data)
  };
  return (
    <>
    <h1>Registre-se</h1>
      <form
        onSubmit={(e) => {
          registerSubmitHandler(e);
        }}
      >
        <label>Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="email aqui"
        />
        <label>Senha</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="placeholder"
          placeholder="senha aqui"
        />
        <label>Nome de Usuário</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="nome de usuário aqui"
        />
        <label>Avatar</label>
        <input
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
          type="text"
          placeholder="link da imagem de Perfil"
        />
        <button type="submit">Logar</button>
      </form>
    </>
  );
};

export default RegisterPage;
