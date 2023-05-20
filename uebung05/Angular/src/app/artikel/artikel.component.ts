import { Component } from '@angular/core';
import { article } from 'src/article';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css'],
})
export class ArtikelComponent {
  article: article = {
    name: 'Artikel01',
    date: '19.05.2023',
    author: 'Max Mustermann',
    teaser: 'Erster Artikel',
    img: '',
    content: 'Das ist ein Artikel',
    tags: 'Dokument, Nachricht',
    id: '2',
  };
}
