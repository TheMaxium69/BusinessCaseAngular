import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";

const approutes: Routes = [
  /*{path: 'exemple', component: ExempleComponent},
  {path: 'del/:id', component: ExempleDelComponent},
  {path: '', component: ExempleComponent },
  {path: '**', component: ExempleComponent },*/
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
