import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './mon-premier-composant/mon-premier-composant.component';
import { MonDeuxiemeComposantComponent } from './mon-deuxieme-composant/mon-deuxieme-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    MonDeuxiemeComposantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
