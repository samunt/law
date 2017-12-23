import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { PdfJsonParseComponent } from './pdf-json-parse/pdf-json-parse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    PdfJsonParseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
