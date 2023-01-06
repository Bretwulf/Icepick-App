import React, { createContext, useContext, useState } from "react";
import {
  iLoginRequest,
  iRegisterRequest,
  iUser,
  iLoginResponse,
  iEditRequest,
  iUserContext,
  iContextProps,
} from "../types/types";
import { API } from "../services/axios";

import { AxiosError } from "axios";
import { Toast } from "../components/Toast";
import { loadingContext } from "./loadingContext";

interface iLoginError {
  error: string;
}

export const userContext = createContext({} as iUserContext);
//alguns erros ainda presentes no arquivo, enquanto eu implemento as funções em si :)
const UserProvider = ({ children }: iContextProps) => {
  const [user, setUser] = useState<iUser>();
  const [token, setToken] = useState<string>("");
  const {toggleLoading } = useContext(loadingContext);

  const login = async (data: iLoginRequest): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.post<iLoginResponse>("login", data, {
        headers: { "Content-Type": "application/json" },
      });
      Toast("Login realizado com sucesso.", "sucess")
      setUser(response.data.user);
      setToken(response.data.accessToken);
      console.log(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      
    }
  };

  const register = async (data: iRegisterRequest): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.post("users", data, {
        headers: { "Content-Type": "application/json" },
      });
      Toast("Cadastro realizado com sucesso.", "sucess")
      console.log(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
     
    }
  };

  const edit = async (
    id: number,
    token: string,
    data: iEditRequest
  ): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.patch(`users/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      Toast("Frase editada com sucesso.", "sucess")
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
     
    }
  };

  const deletet = async (id: number, token: string): Promise<void> => {
    toggleLoading(true);
    try {
      await API.delete(`users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      Toast("Frase deletada com sucesso.", "sucess")
      setUser(undefined);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
     
    }
  };

  const get = async (id: number, token: string): Promise<void> => {
    toggleLoading(true);
    try {
      const response = await API.get<iUser>(`users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      Toast("Dados obtidos com sucesso.", "sucess")
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        token,
        register,
        deletet,
        edit,
        login,
        get,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
