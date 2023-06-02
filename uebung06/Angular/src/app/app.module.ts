import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArtikellisteComponent } from './artikelliste/artikelliste.component';
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ArtikelShareComponent } from './artikel-share/artikel-share.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArtikelComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ArtikellisteComponent,
    ArtikelEditorComponent,
    ImpressumComponent,
    KontaktComponent,
    ArtikelShareComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
