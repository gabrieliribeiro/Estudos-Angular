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

  private httpOptionsToken = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
    responseType: 'text' as 'json'
  };

  public getToken(): Observable<string>{
    let url = "http://localhost:8080/auth/token";
    let userLogin = {
      email:"gabrieli@gmail.com",
      password:"123"
    }
    return this.http.post<string>(url, userLogin, this.httpOptionsToken);
  }

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    let url = `http://localhost:8080/user`;
    return this.http.get<User[]>(url);
  }

  public getUsers(): Observable<User[]> {
    let url = `http://localhost:8080/user`;
    this.http.get<User[]>(this.urlBase).subscribe(users => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
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

  public editUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.urlBase}/${user.id}`, JSON.stringify(user), this.httpOptions).pipe(
      tap(() => {
        this.getUsers();
      })
    ); 
  }
}
