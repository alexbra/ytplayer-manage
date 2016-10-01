import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './home.component';
import { VideoCollectionComponent } from './video-collection.component';
import { ManageVideosPageComponent } from './manage-videos-page.component';
import { VideoService,
         VideoGridComponent,
         VideoPlayerComponent,
         VideoWidgetComponent,
         VideoWidgetPlaylistComponent,
         VideoDetailComponent,
         ManageVideosComponent,
         ManageVideosListComponent,
         ManageVideoFormComponent } from './videos';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCollectionComponent,
    VideoPlayerComponent,
    VideoWidgetComponent,
    VideoWidgetPlaylistComponent,
    VideoGridComponent,
    VideoDetailComponent,
    ManageVideosPageComponent,
    ManageVideosComponent,
    ManageVideosListComponent,
    ManageVideoFormComponent
  ],
  providers: [ VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
