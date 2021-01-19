// import React,{createContext, useState, useEffect, useContext} from 'react';

// import * as auth from '../services/auth';
// import api from '../services/api'
// // import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const AuthContext = createContext({});

// export const AuthProvider = ({children})=> {
//     const [user,setUser] = useState(null);
//     const [loading,setLoading] = useState(true);//true

//     useEffect (()=> {
//         async function loadStoragedData(){

//             const storagedUser = await AsyncStorage.getItem('@eswapp:user');
//             const storagedToken = await AsyncStorage.getItem('@eswapp:token');  
            
            
//             if(storagedUser && storagedToken){
//                 api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

//                 setUser(JSON.parse(storagedUser));
//                 setLoading(false);
//             }
//         }
//         loadStoragedData();
//     },[]);

//     async function signIn(){
          
//         const response = await auth.signIn();
//         // const response = await a

//         setUser(response.user);

//         api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
//         await AsyncStorage.setItem('@eswapp:user', JSON.stringify(response.user));
//         await AsyncStorage.setItem('@eswapp:token', response.token);

//         console.log(response);
       
//     };
//     function signOut(){
//         AsyncStorage.clear().then(()=>{
//             setUser(null);
//         });
//     };

    
//     return (
//         <AuthContext.Provider 
//             value = {{loading, signed: !!user,  user, signIn,signOut}}>
//                     {children}
//     </AuthContext.Provider>
//     );
// };

// export function useAuth(){
//     const context = useContext(AuthContext);

//     return context;
// }


import React, { createContext, useState, useEffect, useContext } from "react";

import * as auth from "../services/auth";
import api from "../services/api";
import AsyncStorage from "@react-native-community/async-storage";
// import AsyncStorage from  "@react-native-async-storage/async-storage"
import { ISignInProps } from "../Interfaces";

interface User {
    user_id: string;
    name: string;
    whatsapp: number;
    city: string;
    uf: string;
    password: string;
    avatar: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(data: ISignInProps): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false); //true para funcionar o loading

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@eswapp:user");
      const storagedToken = await AsyncStorage.getItem("@eswapp:token");

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  async function signIn(data: ISignInProps) {
    const response = await auth.signIn(data);
    setUser(response.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
    await AsyncStorage.setItem("@mobile:user", JSON.stringify(response.user));
    await AsyncStorage.setItem("@mobile:token", response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ loading, signed: !!user, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}