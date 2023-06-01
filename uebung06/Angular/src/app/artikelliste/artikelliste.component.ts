import { Component, Input } from '@angular/core';
import { ArtikelComponent } from 'src/app/artikel/artikel.component';
import { Article } from 'src/article';

@Component({
  selector: 'app-artikelliste',
  templateUrl: './artikelliste.component.html',
  styleUrls: ['./artikelliste.component.css']
})
export class ArtikellisteComponent {
  @Input() articlelist?: Article[];
  
}
