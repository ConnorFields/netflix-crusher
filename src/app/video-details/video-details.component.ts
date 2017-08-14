import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  constructor() { }

  //Variable Decorators
  @Input() mediaSource: string;

  ngOnInit() {
  }

}
