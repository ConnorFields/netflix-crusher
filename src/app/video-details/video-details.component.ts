import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

//Model import
import { Video } from '../data-source.model';

//Service import
import { VideoHistoryService } from '../video-history.service';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})

export class VideoDetailsComponent implements OnInit, AfterViewInit {

  constructor(private _service: VideoHistoryService) { }

  //Data Model
  _mediaSource: Video;

  videoPlayerRef: any;

  //Variable Decorators
  @Input() set mediaSource(value: Video) { 
    this._mediaSource = value;
    if(this.videoPlayerRef != undefined){
      this.videoPlayerRef.load();
      this.videoPlayerRef.play();
      this._service.addToHistory(this._mediaSource);
      let historyList = this._service.listHistory();
    }
  }

  ngOnInit() { }

  //To allow for each video to be played upon click
  ngAfterViewInit() {
    this.videoPlayerRef = document.getElementById('video');
  }
}
