import { Component, Input } from '@angular/core';
import { Article } from 'src/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() articlelist!: Article[];
  tags = new Map<string, number>();
  query = '';
  queryParam: string | null = null;
  tagParam: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    for (let article of this.articlelist) {
      article.tags.split(', ').forEach((tagname) => {
        const tagamount = this.tags.get(tagname);
        if (!tagamount) {
          this.tags.set(tagname, 1);
        } else {
          this.tags.set(tagname, tagamount + 1);
        }
      });
    }

    this.route.paramMap.subscribe((paramap) => {
      this.queryParam = paramap.get('query');
    });

    this.route.paramMap.subscribe((paramap) => {
      this.tagParam = paramap.get('tag');
      console.log(this.tagParam)
    });
  }

  createQueryParameters() {
    console.log(this.tagParam);
    const parameters: {query: string, tag?: string} = { query: this.query };
    if (this.tagParam) {
      console.log(this.tagParam);
      parameters.tag = this.tagParam;
    }
    return parameters;
  }

  createTagParameters(tag: string) {
    const parameters: {tag: string, query?: string} = { tag: tag };
    if (this.queryParam) {
      parameters.query = this.queryParam;
    }
    return parameters;
  }
}
