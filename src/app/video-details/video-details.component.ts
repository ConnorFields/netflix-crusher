import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

//Model import
import { Video } from '../data-source.model';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})

export class VideoDetailsComponent implements OnInit, AfterViewInit {

  videoPlayerRef: any;

  constructor() { 
  }

  _mediaSource: Video;

  //Variable Decorators
  @Input() set mediaSource(value: Video) { 
    this._mediaSource = value;
    if(this.videoPlayerRef != undefined){
      this.videoPlayerRef.load();
      this.videoPlayerRef.play();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayerRef = document.getElementById('video');
  }

}
