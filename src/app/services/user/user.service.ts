import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from '../base-http/base-http.service'; // Import the base HTTP service

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService {
  private apiUrl = '/users';

  // Fetch all users
  getUsers(): Observable<User[]> {
    return this.get<User[]>(BASE_URL + this.apiUrl);
  }

  // Fetch a single user by ID
  getUser(id: number): Observable<User> {
    return this.get<User>(`${BASE_URL}${this.apiUrl}/${id}`);
  }

  // Add a new user
  addUser(user: User): Observable<User> {
    return this.post<User>(BASE_URL + this.apiUrl, user);
  }

  // Update an existing user
  updateUser(id: number, user: User): Observable<User> {
    return this.put<User>(`${BASE_URL}${this.apiUrl}/${id}`, user);
  }

  // Delete an user
  deleteUser(id: number): Observable<User> {
    return this.delete<User>(`${BASE_URL}${this.apiUrl}/${id}`);
  }
}
