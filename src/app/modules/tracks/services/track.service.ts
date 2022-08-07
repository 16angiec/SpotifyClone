import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly url = environment.api;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.url}/tracks`)
  }
}
