import { Producto } from "src/app/@core/interfaces/productos.interface";

export interface Icart {
    total: number; //Alamacenamos el total a pagar
    subtotal: number; //Almacenamos el número de unidades totales
    products: Array<Producto>; //Productos alamacenados

}