const dateElement = document.getElementById("date");
const emailformat = document.getElementById("mail");
document.querySelector("form").addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  //Alter prüfen
  if (Date.now() - dateElement.valueAsNumber > 18 * 365 * 24 * 60 * 60 * 1000) {
    console.log("Sie sind 18 Jahre oder älter.");
    dateElement.classList.remove("invalid");
  } else {
   console.log("Sie sind nicht alt genug.");
    dateElement.classList.add("invalid");
    dateElement.addEventListener("mouseover", () => {
      /*const message = document.createElement("p");
      message.id = "message";
      message.textContent = "Du musst mindestens 18 Jahre alt sein!";
      dateElement.insertAdjacentElement("afterend", message);*/
      var agecall = document.getElementById("date");
      var tooltip_age = new bootstrap.Tooltip(
        agecall,
        options
      );
    });
    dateElement.addEventListener("mouseout", () => {
      //document.getElementById("message").remove();
    });
  }
  console.log(emailformat.value);
  console.log(emailformat.value.match(/^[A-Za-z]{4}@[A-Za-z]{4}.[A-Za-z]{4}$/));
  //E-Mail-Format prüfen
  if (emailformat.value.match(/^[A-Za-z]{4}@[A-Za-z]{4}.[A-Za-z]{4}$/)) {
    console.log("Sie haben eine tolle E-Mail-Adresse.");
    emailformat.classList.remove("invalid");
  } else {
    console.log("Uns gefällt ihre E-Mail nicht.");
    emailformat.classList.add("invalid");
    /*emailformat.addEventListener("mouseover", () => {
      const message = document.createElement("p");
      message.id = "message-email";
      message.textContent =
        "Die Email muss folgendes Format habe: xxxx@xxxx.xxxx";
      emailformat.insertAdjacentElement("afterend", message);
    });
    emailformat.addEventListener("mouseout", () => {
      document.getElementById("message-email").remove();
    });*/
  }
}
