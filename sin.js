let vueltas=10,angulo=3;
console.log("el seno de",angulo," ",seno(angulo,vueltas))
function seno(x,repeticiones){
    var suma=0,signo=1,e=3;
for(let i=0;i<repeticiones;i++){
    suma+=(Math.pow(x,e)/factorial(e)*signo)
    e+=2
    signo*=-1;
}
return suma;
}
function factorial(num)
{
    var n=num;
    for(let i=n-1;i>0;i--)
    n*=i;
    return n;
}

