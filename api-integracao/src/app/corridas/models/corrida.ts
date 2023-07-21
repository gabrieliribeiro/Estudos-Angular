import { Campeonato } from "src/app/campeonato/models/campeonato";
import { Speedway } from "src/app/speedway/models/speedway";

export interface Corrida {
    id: number;
    data: string;
    pista: Speedway;
    campeonato: Campeonato;
}
