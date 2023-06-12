function calculate() {
  let operand1 = document.getElementById("operand1").value;
  let operand2 = document.getElementById("operand2").value;
  let operator = document.getElementById("operator").value;

  let url =
    "http://localhost:3000/" + operator + "/" + operand1 + "/" + operand2;

  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let calculation = request.responseText;
        document.getElementById("ergebnis").textContent = calculation;
      } else {
        document.getElementById("ergebnis").textContent =
          "Fehler bei der Anfrage";
      }
    }
  };

  request.send();
}
