/*generar tres numeros aleatorios
rango de 0 a 19
mostrar el menor*/
//parte de las variables
let num1=Math.floor(Math.random()*20);
let num2=Math.floor(Math.random()*20);
let num3=Math.floor(Math.random()*20); 
//comparador
if (num1<num2)
    if(num1<num3)
    console.log("Numero menor ="+num1)
    else
    console.log("Numero menor ="+num3)
if (num1>num2)
    if(num2<num3)
    console.log("Numero menor ="+num2)
    else 
    console.log("Numero menor ="+num3)
//numeros
console.log(num1)
console.log(num2)
console.log(num3)