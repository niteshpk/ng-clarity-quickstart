import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseHttpService } from '../base-http/base-http.service'; // Import the base HTTP service

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class PostService extends BaseHttpService {
  private apiUrl = '/posts';

  // Fetch all posts
  getPosts(): Observable<Post[]> {
    return this.get<Post[]>(BASE_URL + this.apiUrl);
  }

  // Fetch a single post by ID
  getPost(id: number): Observable<Post> {
    return this.get<Post>(`${BASE_URL}${this.apiUrl}/${id}`);
  }

  // Add a new post
  addPost(post: Post): Observable<Post> {
    return this.post<Post>(BASE_URL + this.apiUrl, post);
  }

  // Update an existing post
  updatePost(id: number, post: Post): Observable<Post> {
    return this.put<Post>(`${BASE_URL}${this.apiUrl}/${id}`, post);
  }

  // Delete an post
  deletePost(id: number): Observable<Post> {
    return this.delete<Post>(`${BASE_URL}${this.apiUrl}/${id}`);
  }
}
