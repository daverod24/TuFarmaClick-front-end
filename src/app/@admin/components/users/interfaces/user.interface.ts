export interface Usuarios {
    total:    number;
    usuarios: Usuario[];
}

export interface Usuario {
    rol:      string;
    estado:   boolean;
    google:   boolean;
    nombre:   string;
    apellido: string;
    email:    string;
    uid:      string;
}
