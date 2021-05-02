import { Producto } from "./producto";

export class Compras {
    id: Number;
    idUser: Number;
    productos: Producto[];
    importe: Number;
    fecha: Date;

    constructor(){ }
}
