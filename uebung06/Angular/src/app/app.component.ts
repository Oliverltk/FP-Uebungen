import { Component } from '@angular/core';
import { Article } from 'src/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articlelist: Article[] = [
    {
      name: 'Artikel01',
      date: '20.04.2023',
      author: 'Max Mustermann',
      teaser: 'Das ist ein Anrisstext',
      img: 'assets/medien/Bild1.jpeg',
      content: 'Das ist der erste Artikel.',
      tags: 'Dokument, Artikel',
      id: '8',
    },
    {
      name: 'Artikel02',
      date: '21.04.2023',
      author: 'Erika Mustermann',
      teaser: 'Das ist ein Anrisstext',
      img: 'assets/medien/Bild2.jpeg',
      content: 'Das ist der zweite Artikel.',
      tags: 'Dokument, Nachricht',
      id: '4',
    },
    {
      name: 'Artikel03',
      date: '22.04.2023',
      author: 'Darth Vader',
      teaser: 'Das ist ein Anrisstext',
      img: 'assets/medien/Bild1.jpeg',
      content: 'Das ist der erste Artikel.',
      tags: 'Dokument, Artikel',
      id: '8',
    },
  ];
}
