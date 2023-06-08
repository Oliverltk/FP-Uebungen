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
  @Input() display = 'full';
  query: string | null = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getarticle();
    this.getdisplay();

    this.route.paramMap.subscribe((paramap) => {
      this.query = paramap.get('query');
    });
  }

  getarticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id == id) {
        this.article = articles[i];
      }
    }
  }

  getdisplay(): void {
    this.route.paramMap.subscribe((paramap) => {
      const display = paramap.get('display');
      if (display) {
        this.display = display;
      }
    });
  }

  createParameters(tag: string) {
    let parameters: { tag: string; query?: string } = {
      tag: tag,
    };
    if (this.query !== null) {
      parameters.query = this.query;
    }
    return parameters;
  }
}
