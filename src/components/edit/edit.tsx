import React, { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import { iEditRequest } from "../../types/types";

const EditPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const { edit, user, token } = useContext(userContext);

  const editSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const data: iEditRequest = {};
    if (avatar && avatar !== "") {
      data.avatar = avatar;
    }
    if (username && username !== "") {
      data.username = username;
    }
    if (email && email !== "") {
      data.email = username;
    }
    if (password && password !== "") {
      data.password = password;
    }
    edit(user!.id, token, data);
  };
  if (user) {
    return (
      <>
        <h1>Edite</h1>
        <form
          onSubmit={(e) => {
            editSubmitHandler(e);
          }}
        >
          <label>Email</label>
          <input
            value={user!.email}
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
          <label>Nome de Usuário</label>
          <input
            value={user!.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="nome de usuário aqui"
          />
          <label>Avatar</label>
          <input
            value={user!.avatar}
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
  } else {
    return (
      <>
        <p>Sem usuário logado para edição.</p>
      </>
    );
  }
};

export default EditPage;
