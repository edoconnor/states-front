import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateListComponent } from './state-list/state-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateDetailsComponent } from './state-details/state-details.component';
import { MaterialDesignModule } from './material-design/material-design.module';
 
 

@NgModule({
  declarations: [AppComponent, StateListComponent, StateDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MaterialDesignModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
