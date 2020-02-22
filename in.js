let vueltas=20,valor=3;
console.log(" Logaritmo de ",valor," ",LogaritmoNatural(valor,vueltas))
function LogaritmoNatural(x,vueltas){
    var suma=0,expotencial=1,denominador,base,a=1;
    base=(x-1)/x;
    denominador=1/a;
    for(let i=0;i<vueltas;i++)
    {
        suma+=(Math.pow(base,expotencial))/denominador;
        expotencial++;
        a++;
    }
    return suma;
}