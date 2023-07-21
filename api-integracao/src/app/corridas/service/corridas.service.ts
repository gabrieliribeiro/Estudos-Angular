import { EventEmitter, Injectable } from '@angular/core';
import { CorridaDto } from '../models/corrida-dto';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CorridasService {
  private urlBase: string = 'http://localhost:8080/corrida';
  private corridaSubject = new Subject<CorridaDto[]>();
  public selectCorridaEvent = new EventEmitter();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public listAll(): Observable<CorridaDto[]> {
    let url = `http://localhost:8080/corrida`;
    this.http
      .get<CorridaDto[]>(this.urlBase)
      .subscribe((corridas) => this.corridaSubject.next(corridas));
    return this.corridaSubject.asObservable();
  }

  public delete(corrida: CorridaDto): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${corrida.id}`);
  }

  public selectCorrida(corrida: CorridaDto) {
    this.selectCorridaEvent.emit(corrida);
  }

  public insert(corrida: CorridaDto): Observable<CorridaDto> {
    return this.http
      .post<CorridaDto>(this.urlBase, JSON.stringify(corrida), this.httpOptions)
      .pipe(
        tap(() => {
          this.listAll();
        })
      );
  }

  public edit(corrida: CorridaDto): Observable<CorridaDto> {
    return this.http
      .put<CorridaDto>(
        `${this.urlBase}/${corrida.id}`,
        JSON.stringify(corrida),
        this.httpOptions
      )
      .pipe(
        tap(() => {
          this.listAll();
        })
      );
  }
}
