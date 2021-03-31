import { AdminComponent } from "src/app/@admin/pages/admin.component";


export interface AuthResponse {
    ok: boolean;
    uid?: string;
    nombre?: string;
    email?: string;
    token?: string;
    msg?: string;
}

export interface Usuario {
    uid: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    role?: string;
}


