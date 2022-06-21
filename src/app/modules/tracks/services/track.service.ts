import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { TracksModule } from '../tracks.module';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracks$: Observable<any> = of([])
  dataTracksRandom$: Observable<any> = of([])


  constructor() {
    const {data}:any = (dataRaw as any).default;

    this.dataTracks$ = of(data)

    this.dataTracksRandom$ = of(data)
  }
}
