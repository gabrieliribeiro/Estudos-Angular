import { Equipe } from "src/app/equipes/models/equipe";
import { Pais } from "src/app/paises/models/pais";

export interface Piloto {
    id: number;
    nome: string;
    pais: Pais;
    equipe: Equipe;
}
