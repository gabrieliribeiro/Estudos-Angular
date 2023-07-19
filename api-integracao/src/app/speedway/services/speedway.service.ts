import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Speedway } from '../models/speedway';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeedwayService {
  private urlBase: string = "http://localhost:8080/pistas"
  private pistaSubject = new Subject<Speedway[]>();

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getPista(): Observable<Speedway[]> {
    let url = `http://localhost:8080/pistas`;
    return this.http.get<Speedway[]>(url);
  }

  public getPistas(): Observable<Speedway[]> {
    let url = `http://localhost:8080/pistas`;
    this.http.get<Speedway[]>(this.urlBase).subscribe(pistas => this.pistaSubject.next(pistas));
    return this.pistaSubject.asObservable();
  }
  

  public listAll(): Observable<Speedway[]> {
    this.http
      .get<Speedway[]>(this.urlBase)
      .subscribe((pistas) => this.pistaSubject.next(pistas));
    return this.pistaSubject.asObservable();
  }

  public saveSpeedway(pista:Speedway): Observable<Speedway>{
    return this.http.post<Speedway>(this.urlBase, pista, this.httpOptions).pipe(
      tap(() => {
        this.listAll();
      })
    );
  }

  public editSpeedway(pista: Speedway): Observable<Speedway> {
    return this.http.put<Speedway>(`${this.urlBase}/${pista.id}`, JSON.stringify(pista), this.httpOptions).pipe(
      tap(() => {
        this.getPistas();
      })
    ); 
  }

  public delete(pista: Speedway): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${pista.id}`, this.httpOptions)
  }
}
