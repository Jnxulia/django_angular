import { User } from './user.model';

export enum Estados {
  "abierto" = "abierto" ,
  "pendiente"  = "pendiente",
  "proceso" = "proceso",
  "resuelto" = "resuelto",
  "cerrado" = "cerrado"
}
export interface Ticket {

    id: number;
    titulo: string;
    descripcion: string;
    estado: Estados;
    fecha_creacion?: Date,
    usuario: number
    user_datail?  :User;
  }