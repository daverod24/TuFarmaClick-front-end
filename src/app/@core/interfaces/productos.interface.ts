export interface RespuestaGetProductos {
    total:     number;
    productos: Producto[];
}

export interface Producto {
    precio:    number;
    _id:       string;
    nombre:    string;
    categoria: Categoria;
    usuario?:   Categoria;
    img?: string;
    stock?: number;
    productosAgregados? : number;
    precioTotalPorProducto?: number;

    //seleccionarCantidad?: number;
}


export interface Categoria {
    _id:    string;
    nombre: string;
}