/*IF CON AND*/

var altura = 0;
var edad = 0;
altura = parseFloat(prompt("Ingrese la altura"));
edad = parseInt(prompt("Ingrese la edad"));
if (altura > 1.30 && edad > 14) {
    console.log("Cumple con los requisitos");
} else {
    console.log("No cumple con los requisitos");
}

/*IF CON OR*/

var color;
color = prompt("Ingrese el color del auto");
if ( color == "rojo") {
    console.log("El auto es rojo");
} else {
    console.log("El auto no es rojo");
}