function createArticle(article) {
  let name1 = article.name;
  let date1 = article.date;
  let author1 = article.author;
  let teaser1 = article.teaser;
  let img1 = article.img;
  let content1 = article.content;
  let tags1 = article.tags;

  artikel1ele = document.createElement("article");

  name1ele = document.createElement("h2");
  let id1 = document.createElement("a");
  id1.setAttribute("href", "artikel.html?articleid=" + article.id);
  id1.textContent = name1;
  name1ele.appendChild(id1);
  artikel1ele.appendChild(name1ele);

  date1ele = document.createElement("p");
  date1ele.textContent = date1;
  artikel1ele.appendChild(date1ele);

  author1ele = document.createElement("p");
  author1ele.textContent = author1;
  artikel1ele.appendChild(author1ele);

  teaser1ele = document.createElement("p");
  teaser1ele.textContent = teaser1;
  artikel1ele.appendChild(teaser1ele);

  img1ele = document.createElement("img");
  img1ele.src = img1;
  artikel1ele.appendChild(img1ele);

  content1ele = document.createElement("p");
  content1ele.textContent = content1;
  artikel1ele.appendChild(content1ele);

  tags1ele = document.createElement("p");
  let newtags = tags1.split(", ");
  for (let i = 0; i < newtags.length; i++) {
    let newlink = document.createElement("a");
    newlink.setAttribute("href", "tagliste.html?tag=" + newtags[i]);
    newlink.textContent = newtags[i] + " ";
    tags1ele.appendChild(newlink);
  }

  artikel1ele.appendChild(tags1ele);

  let facebook1ele = document.createElement("p");
  let facebooklink = document.createElement("a");
  facebooklink.setAttribute(
    "href",
    "https://www.facebook.com/sharer/sharer.php?u=artikel.html?articleid=" +
      article.id
  );
  facebooklink.textContent = "Teilen auf Facebook ";
  facebook1ele.appendChild(facebooklink);
  artikel1ele.appendChild(facebook1ele);

  let twitter1ele = document.createElement("p");
  let twitterlink = document.createElement("a");
  twitterlink.setAttribute(
    "href",
    "http://www.twitter.com/share?url=artikel.html?articleid=" + article.id
  );
  twitterlink.textContent = "Teilen auf Twitter ";
  twitter1ele.appendChild(twitterlink);
  artikel1ele.appendChild(twitter1ele);

  let email1ele = document.createElement("p");
  let emaillink = document.createElement("a");
  emaillink.setAttribute("href", "teilenEmail.html");
  emaillink.textContent = "Teilen per E-Mail ";
  email1ele.appendChild(emaillink);
  artikel1ele.appendChild(email1ele);

  let editbutton = document.createElement("p");
  let editlink = document.createElement("a");
  editlink.setAttribute("href", "artikelNeu.html?articleid=" + article.id);
  editlink.textContent = "Bearbeiten";
  editbutton.appendChild(editlink);
  artikel1ele.appendChild(editbutton);

  return artikel1ele;
}

function getArticleById(id, articles) {
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === id) {
      return articles[i];
    }
  }
}

function getURLparameter(name) {
  let query = location.search;
  let queryParams = new URLSearchParams(query);
  return queryParams.get(name);
}


function getArticlesByTag(tag, articles) {
  let tagcollection = [];
  for (let i = 0; i < articles.length; i++) {
    console.log("articles[i].tags: " + articles[i].tags);
    if (articles[i].tags.includes(tag)) {
      tagcollection.push(articles[i]);
    }
  }
  return tagcollection;
}

function createTagCloud() {
  let collection = [];
  const ul = document.createElement("ul");
  for (let i = 0; i < articles.length; i++) {
    articles[i].tags.split(", ").forEach((element) => {
      const tag = collection.find((tag) => tag.name === element);
      if (!tag) {
        collection.push({ name: element, count: 1 });
      } else {
        tag.count += 1;
      }
    });
  }
  collection.forEach((element) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", "tagliste.html?tag=" + element.name);
    a.textContent = element.name;
    if (element.count <= 1) {
      a.className = "fs-6";
    } else if (element.count <= 2) {
      a.className = "fs-4";
    } else {
      a.className = "fs-2";
    }
  });
  return ul;
}

function createSidebar() {
  const form1 = document.createElement("form");
  const label1 = document.createElement("label");
  const input1 = document.createElement("input");
  const br1 = document.createElement("br");
  const label2 = document.createElement("label");
  const input2 = document.createElement("input");
  const br2 = document.createElement("br");
  const input3 = document.createElement("input");
  const br3 = document.createElement("br");

  form1.appendChild(label1);
  form1.appendChild(input1);
  form1.appendChild(br1);
  form1.appendChild(label2);
  form1.appendChild(input2);
  form1.appendChild(br2);
  form1.appendChild(input3);
  form1.appendChild(br3);

  label1.setAttribute("for", "login");
  label1.textContent = "Login";
  label1.classList.add("class", "form-label", "class", "mt-4");
  input1.setAttribute("name", "login");
  input1.setAttribute("type", "text");
  input1.classList.add("form-control");
  label2.setAttribute("for", "passwort");
  label2.textContent = "Passwort";
  label2.classList.add("class", "form-label");
  input2.setAttribute("name", "passwort");
  input2.setAttribute("type", "text");
  input2.classList.add("class", "form-control");

  input3.setAttribute("type", "submit");
  input3.setAttribute("value", "Login");
  input3.classList.add("btn", "btn-primary");

  const form2 = document.createElement("form");
  const div1 = document.createElement("div");
  const input4 = document.createElement("input");
  const a1 = document.createElement("input");

  form2.appendChild(div1);
  div1.appendChild(input4);
  div1.appendChild(a1);

  
  form2.action = "./Suchergebnis.html";
  input4.name = "search";
  
  input4.setAttribute("type", "search");
  input4.classList.add("class", "form-control");
  input4.classList.add("class", "mt-4");
  a1.setAttribute("type", "submit");
  a1.classList.add("btn", "btn-primary", "class", "mt-4");
  a1.textContent = "Suchen";

  const ul1 = document.createElement("ul");
  const li1 = document.createElement("li");
  const a2 = document.createElement("a");
  const li2 = document.createElement("li");
  const a3 = document.createElement("a");

  ul1.appendChild(li1);
  li1.appendChild(a2);
  ul1.appendChild(li2);
  li2.appendChild(a3);

  a2.setAttribute("href", "monatsliste.html");
  a2.textContent = "März 2018 (2)";
  a2.classList.add("class", "mt-2");

  a3.setAttribute("href", "monatsliste.html");
  a3.textContent = "April 2018 (1)";
  a3.classList.add("class", "mt-2");

  const container = document.createElement("div");
  container.appendChild(form1);
  container.appendChild(form2);
  container.appendChild(ul1);
  container.appendChild(createTagCloud());

  return container;
}

addEventListener("DOMContentLoaded", () => {
  document.getElementById("formular").addEventListener("submit", (event) => {
    event.preventDefault();
    let obj = [];
    obj.name = document.getElementById("name").value;
    obj.date = document.getElementById("date").value;
    obj.author = document.getElementById("author").value;
    obj.teaser = document.getElementById("teaser").value;
    obj.content = document.getElementById("content").value;
    obj.tags = document.getElementById("tags").value;
    obj.img = document.getElementById("img").value;
    console.log(obj);
  });
});

addEventListener("DOMContentLoaded", () => {
  let obj1 = getArticleById(getURLparameter("articleid"), articles);
  document.getElementById("name").value = obj1.name;
  document.getElementById("date").value = obj1.date;
  document.getElementById("author").value = obj1.author;
  document.getElementById("teaser").value = obj1.teaser;
  document.getElementById("content").value = obj1.content;
  document.getElementById("tags").value = obj1.tags;
  document.getElementById("img").value = obj1.img;
  
});
