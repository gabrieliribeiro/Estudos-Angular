import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Campeonato } from '../models/campeonato';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  private urlBase: string = 'http://localhost:8080/campeonato';
  private campeonatosSubject = new Subject<Campeonato[]>();
  public selectCampeonatoEvent = new EventEmitter();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  public getCampeonatos(): Observable<Campeonato[]> {
    this.http.get<Campeonato[]>(this.urlBase).subscribe(paises => this.campeonatosSubject.next(paises));
    return this.campeonatosSubject.asObservable();
  }

  public listAll(): Observable<Campeonato[]> {
    this.http
      .get<Campeonato[]>(this.urlBase)
      .subscribe((campeonatos) => this.campeonatosSubject.next(campeonatos));
    return this.campeonatosSubject.asObservable();
  }

  public getCampeonatosByDescricao(descricao: string): Observable<Campeonato[]> {
    let url = `${this.urlBase}/descricao/${descricao}`;
    this.http
      .get<Campeonato[]>(url)
      .subscribe((equipes) => this.campeonatosSubject.next(equipes));
    return this.campeonatosSubject.asObservable();
  }

  public selectCampeonato(campeonato: Campeonato) {
    this.selectCampeonatoEvent.emit(campeonato);
  }

  public saveCampeonato(campeonato: Campeonato): Observable<Campeonato> {
    return this.http.post<Campeonato>(this.urlBase, campeonato, this.httpOptions).pipe(
      tap(() => {
        this.listAll();
      })
    );
  }

  public delete(campeonato: Campeonato): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${campeonato.id}`, this.httpOptions)
  }

  public editCampeonato(campeonato: Campeonato): Observable<Campeonato> {
    return this.http.put<Campeonato>(`${this.urlBase}/${campeonato.id}`, JSON.stringify(campeonato), this.httpOptions).pipe(
      tap(() => {
        this.getCampeonatos();
      })
    ); 
  }
}
