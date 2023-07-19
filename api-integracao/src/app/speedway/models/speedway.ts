import { Pais } from "src/app/paises/models/pais";

export interface Speedway {
    id: number;
    name: string;
    tamanho: number;
    pais: Pais;
}
