export interface iUser {
  email:string,
  username:string,
  avatar:string,
  password?:string,
  id:number
}

export interface iLoginRequest {
  email: string;
  password: string;
}

export interface iLoginUser {
  user: string;
  id: number;
}
export interface iLoginResponse {
  accessToken: string;
  user: iUser;
}
export interface iRegisterRequest {
  email: string;
  password: string;
  username: string;
  avatar: string;
}

export interface iEditRequest {
  email?: string;
  password?: string;
  username?: string;
  avatar?: string;
}

export interface iSentences {
  userId: number;
  type: string;
  text: string;
  like: number;
  id: string;
}

export interface iContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser| undefined;
  token: string,
  register: (data: iRegisterRequest) => void;
  deletet: (id: number, token: string) => void;
  edit: (id: number, token: string, data: iEditRequest) => void;
  login: (data: iLoginRequest) => Promise<void>;
  logout: () => void;
  get: (id: number, token: string) => void;
}