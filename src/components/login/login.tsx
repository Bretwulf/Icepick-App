import React, { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import { iLoginRequest } from "../../types/types";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(userContext);

  const loginSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const data: iLoginRequest = {
      email: email,
      password: password,
    };
    login(data);
  };
  return (
    <>
      <h1>Logue</h1>
      <form
        onSubmit={(e) => {
          loginSubmitHandler(e);
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
          type="password"
          placeholder="senha aqui"
        />

        <button type="submit">Logar</button>
      </form>
    </>
  );
};

export default LoginPage;
