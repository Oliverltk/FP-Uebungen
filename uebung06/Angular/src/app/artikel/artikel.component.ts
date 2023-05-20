import { Component, Input } from '@angular/core';
import { Article } from 'src/article';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css'],
})
export class ArtikelComponent {
  @Input() article?: Article;
}
