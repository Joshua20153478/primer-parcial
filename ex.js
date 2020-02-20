var s=4;
console.log(algo(s))
function algo(s)
{
    var e=0, x=2, n=1, res=0, p=0, sum=0, sumfacto=0;
    for(var i=1; i<=a; i++)
    n*=i;
    sumfacto+=n;
    for(let k=1; k<=s; k++)
    p+=Math.pow(x,k);
    sum+=p;
    e=1+(sum/sumfacto);
    res= Math.pow(e,x);
    return res;
}