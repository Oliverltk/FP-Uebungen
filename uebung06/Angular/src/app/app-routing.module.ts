import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [
  {path: 'impressum', component: ImpressumComponent},
  {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
