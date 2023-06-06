import { Component, Input } from '@angular/core';
import { Article } from 'src/article';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() articlelist!: Article[];
  tags = new Map<string, number>();
  query = '';
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
  }
}
