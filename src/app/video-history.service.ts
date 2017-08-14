import { Injectable } from '@angular/core';

//Model import
import { Video } from './data-source.model';

@Injectable()
export class VideoHistoryService {
    
    private history: Video[] = [];

    //Pushing selected videos to array of watched videos
    addToHistory(video: Video) {
        this.history.push(video);
    }

    //Returning reference to list of history
    listHistory() {
        return this.history;
    }
}
