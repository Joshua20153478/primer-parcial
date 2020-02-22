/*let x=3,n=2;
coseno(x)=1-Math.pow(x,n)/nI+Math.pow(x,n+2)/nI+2-Math.pow(x,n+2)/nI+2*/
let vueltas=10,pendiente=90;
console.log("el coseno de",pendiente," ",coseno(pendiente,vueltas))
function coseno(x,repeticiones)
{
    var suma=0,signo=-1,expotencial=2;
    for(let i=0;i<repeticiones;i++)//i=0 para i que es menor a numero de repeticiones a i se agrega 1
    {
        suma+=(Math.pow(x,expotencial))/factorial(expotencial)*signo;//
        expotencial+=2;//se suma al expotencial en dos
        signo*=-1;//el signo se multiplica por - 1
    }
        return suma;//regresa el resultado a suma
}

function factorial(numero)
{
    
    var n=numero,i;
    for(i=n-1;i>0;i--)
     n*=i;
    return n;
}
