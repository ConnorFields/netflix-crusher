import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject'
import 'rxjs/add/operator/map';

@Injectable()
export class VideoImporterService {

  constructor(private _http: Http) { 
  }

  public getVideoList(): Observable<any>{

    let videoUrl: string = 'https://demo2697834.mockable.io/movies';

    return this._http.get(videoUrl).map( response => {
      if(response.ok){
        return response.json();
      } else {
        throw("Failed to fetch Videos, Server responded with: " + response.statusText);
      }
  })   
  }
}
