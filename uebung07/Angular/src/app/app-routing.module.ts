import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ArtikellisteComponent } from './artikelliste/artikelliste.component';
import { ArtikelShareComponent } from './artikel-share/artikel-share.component';
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { ArtikelComponent } from './artikel/artikel.component';

const routes: Routes = [
  {path: 'Impressum', component: ImpressumComponent},
  {path: 'Kontakt', component: KontaktComponent},
  {path: 'articles', component: ArtikellisteComponent},
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'share', component: ArtikelShareComponent},
  {path: 'edit/:id', component: ArtikelEditorComponent},
  {path: 'article/:id', component: ArtikelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
