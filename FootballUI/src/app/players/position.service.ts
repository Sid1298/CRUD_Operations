import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private apiURL: string = "http://localhost:5000/api";
  
  constructor(private httpClient: HttpClient) { }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getPositions(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.apiURL + '/positions')
      .pipe(catchError(this.errorHandler)
      );
  }
}
