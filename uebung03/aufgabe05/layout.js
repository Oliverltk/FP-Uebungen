const small = document.getElementById("onemin");

for(let i = 0; i < 60;i++) {
     const x = document.createElement("div");
     x.style.transform = "rotate("+ (i * 6)+"deg)";
     x.className = "onemin";
     document.body.appendChild(x);
     if(i % 5 === 0) {
        x.className="fivemin";
     }
}
const std = document.createElement("div");
const min = document.createElement("div");
const sek = document.createElement("div");

std.className = "std";
min.className = "min";
sek.className = "sek";

document.body.appendChild(std);
document.body.appendChild(min);
document.body.appendChild(sek);

setInterval(()=>{
    const now = new Date();
    const secondsdegrees = now.getSeconds() * 6;
    sek.style.transform = "rotate("+ secondsdegrees + "deg)";
    const mindegrees = now.getMinutes() * 6;
    min.style.transform = "rotate("+ mindegrees + "deg)";
    const stddegrees = (now.getHours()  + now.getMinutes()/60)* 30;
    std.style.transform = "rotate(" + stddegrees + "deg)";
}, 1000)