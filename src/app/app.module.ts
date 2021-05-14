import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FatherComponent } from './father/father.component';
import { SonAComponent } from './son-a/son-a.component';
import { SonBComponent } from './son-b/son-b.component';
import { GrandSonAComponent } from './grand-son-a/grand-son-a.component';
import { GrandSonBComponent } from './grand-son-b/grand-son-b.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonAComponent,
    SonBComponent,
    GrandSonAComponent,
    GrandSonBComponent,
    ToolbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
