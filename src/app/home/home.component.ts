import { Component, OnInit } from '@angular/core';

//Service Import
import { VideoImporterService } from '../video-importer.service';

//Model import
import { Video } from '../data-source.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

constructor(private _service: VideoImporterService) { }

//Global Variables
videoList: Video[];
offset: number = 0;
selectedVideo: Video;

getItemPosition(index: number) {
  let width: number = 300;
  return (index * width + (-this.offset)) + 'px';
}

setSelectedVideo(selectedVideo:any){
  this.selectedVideo = selectedVideo;
  for(let video of this.videoList){
    video.isSelected = false;
  }
  selectedVideo.isSelected = true;
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

    document.addEventListener('keydown', (ev:KeyboardEvent) => {
      let indexOfSelected = 0;
      if(this.selectedVideo == undefined) {
        this.selectedVideo = this.videoList[0];
      }
      switch(ev.keyCode){
        case 39://Right Arrow
          this.navigateRight();
          indexOfSelected = this.videoList.indexOf(this.selectedVideo);
          if(indexOfSelected < (this.videoList.length-1) ){
            this.setSelectedVideo(this.videoList[indexOfSelected + 1]);
          }
        break;
        case 37://Left Arrow
          this.navigateLeft();
          indexOfSelected = this.videoList.indexOf(this.selectedVideo);
          if(indexOfSelected > 0){
            this.setSelectedVideo(this.videoList[indexOfSelected - 1]);
          }
        break;
      }
    });
  }
}
