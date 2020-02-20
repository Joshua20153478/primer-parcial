var e=1, facto=1,se=3;

for(let i=1;i<=se;i++)
e+=(1/factorial(i))

console.log("Resultado es: " + e);

function factorial(facto)
{
    let Total=1;
    for(let h=1;h<=facto;h++)
    {
        Total*=h;
    }

    return Total;
}