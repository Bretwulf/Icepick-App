import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";


const DeletePage = () => {

  const {user,token,deletet } = useContext(userContext);



  if(user){
    return (
      <>
      <h1>Delete</h1>
        <button onClick={()=>deletet(user.id,token)}>Delete o usuário {user.username}</button>
      </>
    );
  }
  else{
    return (
      <>
      <p>Sem usuário logado para deleção.</p>
      </>
    )
  }
  
};

export default DeletePage;
