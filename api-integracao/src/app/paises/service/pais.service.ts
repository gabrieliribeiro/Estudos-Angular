import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Pais } from '../models/pais';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlBase: string = 'http://localhost:8080/pais';
  private paisesSubject = new Subject<Pais[]>();
  public emitEvent = new EventEmitter();
  public updateEvent = new EventEmitter();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPais(): Observable<Pais[]> {
    let url = `http://localhost:8080/user`;
    return this.http.get<Pais[]>(url);
  }

  public getPaises(): Observable<Pais[]> {
    let url = `http://localhost:8080/user`;
    this.http.get<Pais[]>(this.urlBase).subscribe(paises => this.paisesSubject.next(paises));
    return this.paisesSubject.asObservable();
  }

  public listAll(): Observable<Pais[]> {
    this.http
      .get<Pais[]>(this.urlBase)
      .subscribe((paises) => this.paisesSubject.next(paises));
    return this.paisesSubject.asObservable();
  }

  public getUsersByName(name: string): Observable<Pais[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Pais[]>(url)
      .subscribe((paises) => this.paisesSubject.next(paises));
    return this.paisesSubject.asObservable();
  }

  public selectUser(pais: Pais) {
    this.emitEvent.emit(pais);
  }

  public saveUser(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(this.urlBase, pais, this.httpOptions).pipe(
      tap(() => {
        this.listAll();
      })
    );
  }

  public delete(pais: Pais): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${pais.id}`, this.httpOptions)
  }

  public editUser(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.urlBase}/${pais.id}`, JSON.stringify(pais), this.httpOptions).pipe(
      tap(() => {
        this.getPaises();
      })
    ); 
  }
}
