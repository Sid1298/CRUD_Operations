import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiURL: string = "http://localhost:5000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.apiURL + '/players')
      .pipe(catchError(this.errorHandler));
  }

  getPlayer(id: any): Observable<Player> {
    return this.httpClient.get<Player>(this.apiURL + '/players/' + id)
      .pipe(catchError(this.errorHandler));
  }

  createPlayer(player: any): Observable<Player> {
    return this.httpClient.post<Player>(this.apiURL + '/players/', JSON.stringify(player), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updatePlayer(id: any, player: any): Observable<Player> {
    return this.httpClient.put<Player>(this.apiURL + '/players/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  deletePlayer(id: any): Observable<Player> {
    return this.httpClient.delete<Player>(this.apiURL + '/players/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
