import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/components/header/header.component';
import { MainComponent } from 'src/components/main/main.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NewsComponent } from 'src/components/news/news.component';

const COMPONENT = [
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
