import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment'; // Ensure you have errorLogging in environment

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {}

  // GET Request
  get<T>(url: string, options?: any): Observable<T> {
    return this.http.get<T>(url, options).pipe(
      tap((response) =>
        this.logRequest('GET', url, null, options, response, 200)
      ),
      catchError((error) => this.handleError('GET', url, null, options, error))
    ) as Observable<T>;
  }

  // POST Request
  post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.http.post<T>(url, body, options).pipe(
      tap((response) =>
        this.logRequest('POST', url, body, options, response, 200)
      ),
      catchError((error) => this.handleError('POST', url, body, options, error))
    ) as Observable<T>;
  }

  // PUT Request
  put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.http.put<T>(url, body, options).pipe(
      tap((response) =>
        this.logRequest('PUT', url, body, options, response, 200)
      ),
      catchError((error) => this.handleError('PUT', url, body, options, error))
    ) as Observable<T>;
  }

  // PATCH Request
  patch<T>(url: string, body: any, options?: any): Observable<T> {
    return this.http.patch<T>(url, body, options).pipe(
      tap((response) =>
        this.logRequest('PATCH', url, body, options, response, 200)
      ),
      catchError((error) =>
        this.handleError('PATCH', url, body, options, error)
      )
    ) as Observable<T>;
  }

  // DELETE Request
  delete<T>(url: string, options?: any): Observable<T> {
    return this.http.delete<T>(url, options).pipe(
      tap((response) =>
        this.logRequest('DELETE', url, null, options, response, 200)
      ),
      catchError((error) =>
        this.handleError('DELETE', url, null, options, error)
      )
    ) as Observable<T>;
  }

  // Log the request details
  private logRequest(
    method: string,
    url: string,
    body: any,
    headers: HttpHeaders,
    response: any,
    statusCode: number
  ) {
    if (environment.apiLogging) {
      // Log details to file or console, as required
      console.log('---------------');
      console.log(
        `Method: ${method}, URL: ${url}, Status: ${statusCode}, Body: ${JSON.stringify(
          body
        )},`
      );
      console.log(`Headers: ${JSON.stringify(headers)}`);
      console.log(`Response: ${JSON.stringify(response)}`);
      // Here you can implement a file logging system if required
    }
  }

  // Handle errors and log them
  private handleError(
    method: string,
    url: string,
    body: any,
    headers: HttpHeaders,
    error: HttpErrorResponse
  ) {
    if (environment.apiErrorLogging) {
      console.error(`Error in ${method} request to ${url}`);
      console.error(`Request Body: ${JSON.stringify(body)}`);
      // console.error(`Headers: ${JSON.stringify(headers)}`);
      console.error(`Error: ${JSON.stringify(error)}`);
      // Additional logging can be done here
    }
    return throwError(error);
  }
}
