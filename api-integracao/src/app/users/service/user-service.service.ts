import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public emitEvent = new EventEmitter();

  public usuario: User = {id: 0, name: '', email: '', password: '', roles: ''};

  private list: User[]=[];

  public getLista(){
    return this.list;
  }

  public adiciona(id: number, name: string, email: string, password:string, roles: string){
    const newUser = {id: id, name:name, email:email, password:password, roles:roles};
    this.list.push(newUser);
    this.emitEvent.emit(this.list);
  }

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    let url = `http://localhost:8080/user`;
    return this.http.get<User[]>(url);
  }
  
}
