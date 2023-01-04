import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";

const GetPage = () => {
  const { user, token, get } = useContext(userContext);

  if (user) {
    return (
      <>
        <h1>Busque</h1>
        <button onClick={() => get(user.id, token)}>
          Busque os dados do usuário {user.username}
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Sem usuário logado para busca.</p>
      </>
    );
  }
};

export default GetPage;
