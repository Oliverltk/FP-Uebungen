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
  display = 'full';
  tag: string | null = null;
  query: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gettag();
    this.getquery();
    this.getdisplay();
  }

  gettag(): void {
    this.route.paramMap.subscribe((paramap) => {
      this.tag = paramap.get('tag');
      this.updateList();
    });
  }

  getquery(): void {
    this.route.paramMap.subscribe((paramap) => {
      this.query = paramap.get('query');
      this.updateList();
    });
  }

  updateList(): void {
    this.articlelist = articles;
    if (this.query !== null) {
      this.articlelist = this.articlelist.filter((article) => {
        return Object.values(article).join().includes(this.query!);
      });
    }
    if (this.tag !== null) {
      this.articlelist = this.articlelist.filter((article) => {
        return article.tags.includes(this.tag!);
      });
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

  createparameters(display: string) {
    let parameter: { display: string; tag?: string; query?: string } = {
      display: display,
    };
    if (this.tag !== null) {
      parameter.tag = this.tag;
    }
    if (this.query !== null) {
      parameter.query = this.query;
    }
    return parameter;
  }

  removeTagParameter() {
    let parameters: { display: string; query?: string } = {
      display: this.display,
    };
    if (this.query !== null) {
      parameters.query = this.query;
    }
    return parameters;
  }

  removeQueryParameter() {
    let parameters: { display: string; tag?: string } = {
      display: this.display,
    };
    if (this.tag !== null) {
      parameters.tag = this.tag;
    }
    return parameters;
  }
}
