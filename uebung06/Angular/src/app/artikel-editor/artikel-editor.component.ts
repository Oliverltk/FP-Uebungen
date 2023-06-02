import { Component } from '@angular/core';
import { Article } from 'src/article';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import articles from 'src/data';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent {
  article!: Article;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getarticle();
  }

  getarticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    for(let i = 0; i < articles.length;i++) {
      if(articles[i].id == id) {
        this.article = articles[i];
      }
    }
  }
}
