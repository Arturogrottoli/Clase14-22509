
let numero1 = 4;
let numero2 = "4";

console.log(numero1===numero2)

console.log(numero1!==numero2)

console.log("valor original del numero 1:" ,numero1)

numero1++    //numero1 = numero1 + 1

console.log("nuevo valor del numero 1:",numero1)


numero1 += numero2   //numero1 = numero1 + numero2


//Condicionales

let nota = Number.parseInt(prompt("Ingrese el valor de su nota",))

console.log("El valor de su nota es el siguiente:" , nota)


if(nota<0||nota>10){
    console.log("El numero ingresado, es incorrecto. La nota debe ser entre 0 y 10")
}else if(nota >= 4){
    alert("Felicitaciones, estas aprobado!")
}else{
    console.error("Desaprobado!")
}

//bucles while

i = 0;

while(i<5){
    console.log("Valor de i en este ciclo:", i);
    i= i+1;
}


//bucles for

for(var p=0; p<5; p++){
    console.log("Valor de p en este ciclo",p)
}

