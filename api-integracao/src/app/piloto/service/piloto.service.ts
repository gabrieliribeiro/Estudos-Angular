import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Piloto } from '../models/piloto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {
  private urlBase: string = "http://localhost:8080/pilotos"
  private pilotoSubject = new Subject<Piloto[]>();
  public selectPilotoEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public getPilotos(): Observable<Piloto[]> {
    this.http.get<Piloto[]>(this.urlBase).subscribe(pilotos => this.pilotoSubject.next(pilotos));
    return this.pilotoSubject.asObservable();
  }

  public selectPiloto(piloto: Piloto) {
    this.selectPilotoEvent.emit(piloto);
    console.log(piloto);
  }

  public listAll(): Observable<Piloto[]> {
    this.http
      .get<Piloto[]>(this.urlBase)
      .subscribe((pilotos) => this.pilotoSubject.next(pilotos));
    return this.pilotoSubject.asObservable();
  }

  public savePiloto(piloto:Piloto): Observable<Piloto>{
    return this.http.post<Piloto>(this.urlBase, JSON.stringify(piloto), this.httpOptions).pipe(
      tap(() => {
        this.listAll();
      })
    );
  }

  public editPiloto(piloto:Piloto): Observable<Piloto> {
    return this.http.put<Piloto>(`${this.urlBase}/${piloto.id}`, JSON.stringify(piloto), this.httpOptions).pipe(
      tap(() => {
        this.getPilotos();
      })
    ); 
  }

  public delete(pista: Piloto): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${pista.id}`, this.httpOptions)
  }
}
