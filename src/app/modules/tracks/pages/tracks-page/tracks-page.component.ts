import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  mockTracksList1: Array<TrackModel> = []
  mockTracksList2: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracks$.subscribe(response => {
      this.mockTracksList1 = response;
    })

    const observer2$ = this.trackService.dataTracks$.subscribe(response => {
      this.mockTracksList2 = response;
    })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
