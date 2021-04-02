import { IUser } from './user.interface';

export interface IRegisterForm {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    role?: string;
}

export interface IResultRegister {
    status: boolean;
    message: string;
    user?: IUser;
}

