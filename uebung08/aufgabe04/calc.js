// HTTP Modul einbinden
var http = require("http");

// URL Modul einbinden
var url = require("url");

// HTTP Server erzeugen
var server = http.createServer(serve);

// Server an Port binden
server.listen(3000);

// Funktion des HTTP-Servers
// req: Anfrage vom Client (Request)
// res: Antwort des Servers (Response)
function serve(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  let parts = path.split("/");

  if (parts.length !== 4) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Fehler: Ungültige Anfrage.");
    return;
  }

  let operator = parts[1];
  let operand1 = parseFloat(parts[2]);
  let operand2 = parseFloat(parts[3]);

  if (isNaN(operand1) || isNaN(operand2)) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Fehler: Operanden müssen numerisch sein.");
    return;
  }

  let result = null;

  switch (operator) {
    case "add":
      result = operand1 + operand2;
      break;
    case "sub":
      result = operand1 - operand2;
      break;
    case "mul":
      result = operand1 * operand2;
      break;
    case "div":
      if (operand2 === 0) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Fehler: Division durch 0 nicht möglich");
        return;
      }
      result = operand1 / operand2;
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Fehler: Nicht unterstützter Operator.");
      return;
  }
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(result.toString());
}
