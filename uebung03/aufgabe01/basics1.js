let x = 'Wert';

if(!x) {
    console.log(x + ' hat einen der folgenden Werte: false, 0, -0, "", null, undefined oder NaN.');
}
else {
    console.log(x + ' hat einen Truthy-Wert.')
}