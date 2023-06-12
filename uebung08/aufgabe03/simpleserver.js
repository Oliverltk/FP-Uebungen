// HTTP Modul einbinden
var http = require('http');

// URL Modul einbinden
var url = require('url');

// HTTP Server erzeugen
var server = http.createServer(serve);

// Server an Port binden
server.listen(3000);

// Funktion des HTTP-Servers
// req: Anfrage vom Client (Request)
// res: Antwort des Servers (Response)
function serve(req, res) {

let responses = {
    order: {
        drink: 'fuzetea',
        food: 'pizza'
    },
    location: {
        river: 'rhein',
        city: 'leverkusen',
        country: 'germany'
    },
    starwars: {
        jedi: 'luke skywalker',
        sith: 'darth caedus',
        bountyhunter: 'boba fett',
        droid: 'r2-d2'
    }

};

let parsedUrl = url.parse(req.url, true);
let query = parsedUrl.query;

if(query.order && responses.order[query.order]) {
    let response = responses.order[query.order];
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end(response);
} else if (query.location && responses.location[query.location]) {
    let response = responses.location[query.location];
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end(response);
} else if(query.starwars && responses.starwars[query.starwars]) {
    let response = responses.starwars[query.starwars];
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end(response);
} else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Fehler: Nicht unterstützte Kategorie oder Stichwort.");
}

}
