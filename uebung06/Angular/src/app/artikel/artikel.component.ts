import { Component, Input } from '@angular/core';
import { Article } from 'src/article';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import articles from 'src/data';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css'],
})
export class ArtikelComponent {
  @Input() article?: Article;

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

