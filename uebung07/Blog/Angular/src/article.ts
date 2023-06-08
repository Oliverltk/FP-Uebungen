export interface IArticle {
  name: string;
  date: string;
  author: string;
  teaser: string;
  img: string;
  content: string;
  tags: string;
  id: string;
}

export class Article implements IArticle {
  constructor(
    public name: string,
    public date: string,
    public author: string,
    public teaser: string,
    public img: string,
    public content: string,
    public tags: string,
    public id: string
  ) {
    
  }

  
}
