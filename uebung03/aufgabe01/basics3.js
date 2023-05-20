const article1 = new Object();
article1.author = "T.R";
article1.title = "42";
article1.print = function (flag) {
    if(flag) {
        console.log("Der Name des Autors ist "+this.author);
    }
    else {
        console.log("Der Titel lautet "+this.title);
    }
}
article1.print(null);