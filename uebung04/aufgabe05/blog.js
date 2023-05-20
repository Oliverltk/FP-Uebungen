function createArticle(article) {
    let name1 = article.name;
    let date1 = article.date;
    let author1 = article.author;
    let content1 = article.content;

    artikel1ele = document.createElement("article");

    name1ele = document.createElement("h2");
    name1ele.textContent = name1;
    artikel1ele.appendChild(name1ele);

    date1ele = document.createElement("p");
    date1ele.textContent = date1;
    artikel1ele.appendChild(date1ele);

    author1ele = document.createElement("p");
    author1ele.textContent = author1;
    artikel1ele.appendChild(author1ele);

    content1ele = document.createElement("p");
    content1ele.textContent = content1;
    artikel1ele.appendChild(content1ele);

    return artikel1ele;
}

    