import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtikelComponent } from 'src/app/artikel/artikel.component';
import { Article } from 'src/article';
import articles from 'src/data';

@Component({
  selector: 'app-artikelliste',
  templateUrl: './artikelliste.component.html',
  styleUrls: ['./artikelliste.component.css'],
})
export class ArtikellisteComponent {
  articlelist = articles;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gettag();
    this.getquery();
  }

  gettag(): void {
    this.route.paramMap.subscribe((paramap) => {
      let tag = paramap.get('tag');

      if (tag !== null) {
        this.articlelist = articles.filter((article) => {
          return article.tags.includes(tag!);
        });
      }
    });
  }

  getquery(): void {
    this.route.paramMap.subscribe((paramap) => {
      let query = paramap.get('query');
      if (query !== null) {
        this.articlelist = articles.filter((article) => {
          return Object.values(article).join().includes(query!);
        });
      }
    });
  }
}
