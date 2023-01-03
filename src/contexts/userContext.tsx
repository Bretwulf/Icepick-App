import React, { createContext, ReactHTMLElement, VoidFunctionComponent } from 'react'
import { iUser } from '../types/types';
import { API } from '../services/axios';



interface iContextProps {
    children: React.ReactNode,
}


interface iUserContext {
    user: iUser,
    register: (data:iUser)=>void,
    delete: (id:number)=>void,
    edit: (id:number)=>void,
    autologin: ()=>void,
}

const userContext = createContext({} as iUserContext);

const UserProvider = ({children}:iContextProps) => {
    return ( 
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
     );
}
 
export default UserProvider;