import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Equipe } from '../models/equipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private urlBase: string = 'http://localhost:8080/equipe';
  private equipesSubject = new Subject<Equipe[]>();
  public selectEquipeEvent = new EventEmitter();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  public getEquipes(): Observable<Equipe[]> {
    let url = `http://localhost:8080/user`;
    this.http.get<Equipe[]>(this.urlBase).subscribe(paises => this.equipesSubject.next(paises));
    return this.equipesSubject.asObservable();
  }

  public listAll(): Observable<Equipe[]> {
    this.http
      .get<Equipe[]>(this.urlBase)
      .subscribe((equipes) => this.equipesSubject.next(equipes));
    return this.equipesSubject.asObservable();
  }

  public getEquipesByName(name: string): Observable<Equipe[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Equipe[]>(url)
      .subscribe((equipes) => this.equipesSubject.next(equipes));
    return this.equipesSubject.asObservable();
  }

  public selectEquipe(equipe: Equipe) {
    this.selectEquipeEvent.emit(equipe);
  }

  public saveEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.urlBase, equipe, this.httpOptions).pipe(
      tap(() => {
        this.listAll();
      })
    );
  }

  public delete(equipe: Equipe): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${equipe.id}`, this.httpOptions)
  }

  public editEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.urlBase}/${equipe.id}`, JSON.stringify(equipe), this.httpOptions).pipe(
      tap(() => {
        this.getEquipes();
      })
    ); 
  }


}
