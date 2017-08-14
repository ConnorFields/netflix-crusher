import { Component, OnInit } from '@angular/core';

//Service Import
import { VideoImporterService } from '../video-importer.service';
import { VideoHistoryService } from '../video-history.service';

//Model import
import { Video } from '../data-source.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

constructor(
  private _service: VideoImporterService,
  private _historyService: VideoHistoryService) { }

//Global Variables
videoList: Video[];
offset: number = 0;
selectedVideo: Video;
videoHistoryList: Video[];


//Calculate position to set what items are displayed in frame
getItemPosition(index: number) {
  let width: number = 300;
  return (index * width + (-this.offset)) + 'px';
}

//focus indicator
setSelectedVideo(selectedVideo: any) {
  this.selectedVideo = selectedVideo;
  for(let video of this.videoList){
    video.isSelected = false;
  }
  selectedVideo.isSelected = true;
}

//on click function for right arrow
navigateRight() {
  if(!this.rightArrowDisabled){
      this.offset += 300;
      this.leftArrowDisabled = false;
  }
  //Disable button once list is has reached end
  if(this.offset >= (this.videoList.length*300 - 1200)){
    this.rightArrowDisabled = true;
  }
}

//on click function for left arrow
navigateLeft() {
  if(!this.leftArrowDisabled){
    this.offset -= 300;
    this.rightArrowDisabled = false;
  }
  //Disable button if list is at beginning 
  if(this.offset <= 0){
    this.leftArrowDisabled = true;
  }
}

//internal variables to control whether or not arrows are clickable
rightArrowDisabled: boolean;
leftArrowDisabled: boolean;

//subscribing to video service to get video data
ngOnInit() {
    this._service.getVideoList().subscribe(
      data => { this.videoList = data.entries
      //storing previously selected videos in new array
      this.videoHistoryList = this._historyService.listHistory();
      }
    );

    //Using callback for keyboard controls and highlight effect on focused item (video)
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
