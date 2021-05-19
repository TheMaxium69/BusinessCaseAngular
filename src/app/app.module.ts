import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

const approutes: Routes = [
  /*{path: 'exemple', component: ExempleComponent},
  {path: 'del/:id', component: ExempleDelComponent},*/
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent
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
