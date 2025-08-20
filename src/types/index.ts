


export interface User{
    nombre:string;
    apellido:string;
    username:string;
    correo:string;
    password:string;
}

export interface LoginRequest {
  username: string;
  password: string;
}