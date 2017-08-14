import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

//Application Imports
import { VideoImporterService } from './video-importer.service';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    data: { title: 'Netflix Crusher' }
  },
  { 
    path: 'history',      
    component: HistoryComponent 
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
     path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    PageNotFoundComponent,
    VideoDetailsComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [VideoImporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
