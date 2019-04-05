import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-mediaquery',
  templateUrl: './mediaquery.component.html',
  styleUrls: ['./mediaquery.component.scss']
})
export class MediaqueryComponent implements OnInit {

  media$: Observable<MediaChange[]>;

  constructor(media: MediaObserver) {
    this.media$ = media.asObservable();
  }

  ngOnInit() {
  }

}
