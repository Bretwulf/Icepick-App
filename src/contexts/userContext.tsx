import React, { createContext, useState } from "react";
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
import { toast, ToastContent } from "react-toastify";
import { AxiosError } from "axios";

interface iLoginError {
  error: string;
}

export const userContext = createContext({} as iUserContext);
//alguns erros ainda presentes no arquivo, enquanto eu implemento as funções em si :)
const UserProvider = ({ children }: iContextProps) => {
  const [user, setUser] = useState<iUser>();
  const [token, setToken] = useState<string>("");

  const login = async (data: iLoginRequest): Promise<void> => {
    try {
      const response = await API.post<iLoginResponse>("login", data, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(
        "Login realizado com sucesso. Cheque o console para ver a resposta de requisição,",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setUser(response.data.user);
      setToken(response.data.accessToken);
      console.log(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      toast.error(
        typedError.response!.data as unknown as ToastContent<unknown>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const register = async (data: iRegisterRequest): Promise<void> => {
    try {
      const response = await API.post("users", data, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(
        "Login realizado com sucesso. Cheque o console para ver a resposta de requisição,",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      console.log(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      toast.error(
        typedError.response!.data as unknown as ToastContent<unknown>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const edit = async (
    id: number,
    token: string,
    data: iEditRequest
  ): Promise<void> => {
    try {
      const response = await API.patch(`users/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      toast.success(
        "Edição realizado com sucesso. Cheque o console para ver a resposta de requisição,",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      toast.error(
        typedError.response!.data as unknown as ToastContent<unknown>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const deletet = async (id: number, token: string): Promise<void> => {
    try {
      await API.delete(`users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      toast.success(
        "Deleção realizado com sucesso. Cheque o console para ver a resposta de requisição,",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setUser(undefined);
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      toast.error(
        typedError.response!.data as unknown as ToastContent<unknown>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const get = async (id: number, token: string): Promise<void> => {
    try {
      const response = await API.get<iUser>(`users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      toast.success("Dados obtidos com sucesso.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(response.data);
      setUser(response.data)
    } catch (error) {
      const typedError = error as AxiosError<iLoginError>;
      console.log(typedError.response!.data);
      toast.error(
        typedError.response!.data as unknown as ToastContent<unknown>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
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
        get
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
