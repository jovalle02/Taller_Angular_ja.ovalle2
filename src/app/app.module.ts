import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { Obtener_seriesService } from './obtener_series.service';

@NgModule({
  declarations: [		
    AppComponent,
      SeriesListComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Obtener_seriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
