import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly url = environment.api;

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   *
   * @returns Devuelve todas las canciones
   */
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.url}/tracks`).pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.url}/tracks`).pipe(
      map(({ data }: any) => {
        return data.reverse()
      })
    )
  }
}
