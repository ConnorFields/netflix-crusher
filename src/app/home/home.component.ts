import { Component, OnInit } from '@angular/core';

//Service Import
import { VideoImporterService } from '../video-importer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

constructor(private _service: VideoImporterService) { }

//Global Variables
videoList: any[];
offset: number = 0;

getItemPosition(index: number) {
  let width: number = 300;
  return (index * width + (-this.offset)) + 'px';
}

setSelectedVideo(selectedVideo:any){
  for(let video of this.videoList){
    video.isSelected = false;
  }
  selectedVideo.isSelected = true;
}

onKey(event:any){
  console.log(event.target.value);
}

navigateRight() {
  if(!this.rightArrowDisabled){
      this.offset += 300;
      this.leftArrowDisabled = false;
  }
  if(this.offset >= (this.videoList.length*300 - 1200)){
    this.rightArrowDisabled = true;
  }
}

navigateLeft() {
  if(!this.leftArrowDisabled){
    this.offset -= 300;
    this.rightArrowDisabled = false;
  }
  if(this.offset <= 0){
    this.leftArrowDisabled = true;
  }
}

rightArrowDisabled: boolean;
leftArrowDisabled:boolean;


ngOnInit() {
    this._service.getVideoList().subscribe(
      data => this.videoList = data.entries
    );

    document.onkeydown = this.onKey;

  } 
}
