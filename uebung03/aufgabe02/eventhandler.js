//Klick mich
document.getElementById("klick").addEventListener("click", myFunction1);

function myFunction1() {
    document.getElementById("klick").innerHTML = "Du hast mich geklickt!";
}

//Eingabe wird zu Großbuchstaben
document.getElementById("groß").addEventListener("change", myFunction2);

function myFunction2() {
    var x = document.getElementById("groß");
    x.value = x.value.toUpperCase();
} 

//Maus verändert Farbe
document.getElementById("farbe").addEventListener("mouseover", myFunction31);
document.getElementById("farbe").addEventListener("mouseout", myFunction32);

function myFunction31() {
    document.getElementById("farbe").style.color = "red";
}
function myFunction32() {
    document.getElementById("farbe").style.color = "black";
}

