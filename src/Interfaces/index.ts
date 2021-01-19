export interface ISignInProps {
    whatsapp: number;
    password: string;
  }
  
  export interface IUser {
    user_id: string;
    name: string;
    whatsapp: number;
    city: string;
    uf: string;
    password: string;
    avatar: string;
  }