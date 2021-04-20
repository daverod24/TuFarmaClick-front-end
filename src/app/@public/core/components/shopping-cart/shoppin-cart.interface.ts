import { Usuario } from "src/app/@core/interfaces/login.interface";
import { Producto } from "src/app/@core/interfaces/productos.interface";

export interface CarritoDeCompras {
    total: number; 
    subtotal: number; 
    productos: Array<Producto>;
    totalProductosAgregados: number; 
    usuario?: Usuario;

}