import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private urlBase: string = 'http://localhost:8080/user';
  private usersSubject = new Subject<User[]>();
  public emitEvent = new EventEmitter();
  public updateEvent = new EventEmitter();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    let url = `http://localhost:8080/user`;
    return this.http.get<User[]>(url);
  }

  public listAll(): Observable<User[]> {
    this.http
      .get<User[]>(this.urlBase)
      .subscribe((users) => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
  }

  public getUsersByName(name: string): Observable<User[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<User[]>(url)
      .subscribe((users) => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
  }

  public selectUser(user: User) {
    this.emitEvent.emit(user);
  }

  public saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlBase, user, this.httpOptions).pipe(
      tap(() => {
        this.listAll();
      })
    );
  }

  public delete(user: User): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${user.id}`, this.httpOptions)
  }
}
