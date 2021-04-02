import { AdminComponent } from "src/app/@admin/pages/admin.component";

export interface Usuario {
    uid?: string;
    nombre: string;
    apellido?: string;
    email: string;
    password?: string;
    role?: string;
    ok?:      boolean;
}

export interface AuthResponse  {
    ok:      boolean;
    usuario: UsuarioClass;
    token:   string;
}

export interface UsuarioClass {
    rol:      string;
    estado:   boolean;
    google:   boolean;
    nombre:   string;
    apellido: string;
    email:    string;
    uid:      string;
}



