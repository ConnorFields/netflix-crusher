import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { }

  //Variable Decorators
  @Input() mediaSource: string;

  ngOnInit() {
  }

}
