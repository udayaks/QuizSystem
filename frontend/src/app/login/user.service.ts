import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  createUser(userObj): Observable<User> {
    return this.http.post('http://localhost:3000/user/signup', userObj)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  getByUsername(username): Observable<User> {
    return this.http.post('http://localhost:3000/user/getByUsername', username)
      .map(response => {
        return new User(response.json());
      })
  }

  /*listUser() {
   return this.http.get('http://localhost:3000/users')
   .map((response) => {
   let listedUsers: User[] = [];
   response.json().forEach((userObj) => {
   let user = new User();
   user.username = userObj.username;

   listedUsers.push(user)
   });
   return listedUsers;
   })
   }*/

  login(userData): Observable<User> {
    return this.http.post('http://localhost:3000/user/signin', userData)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
