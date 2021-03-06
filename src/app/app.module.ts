import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import 'hammer-timejs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PascalComponent } from './components/pascal/pascal.component';
import { HomeComponent } from './pages/home/home.component';
import { TouchDirective } from './directives/touch.directive';


@NgModule({
  declarations: [
    AppComponent,
    PascalComponent,
    HomeComponent,
    TouchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
