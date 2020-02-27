//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function carrera()
{
     var v1=0,v2=0,b=0;
    while(v1<100 && v2<100)
        {
            v1+=avance();
            v2+=avance();
            console.log("v1.. " + v1)
            console.log("v2.. " + v2)
        }
    if(v1>=100)
        console.log("v1 ganador")
        else
            if(v2>=100)
                console.log("empate");
            else
                console.log("v2 ganador");    
}
carrera();


function avance()
{
    var a=0,d=0;
    d=dado();
//    if(dado(d));
    if(d>5)
        a+=3;
    else
        if(d>3)
            a+=2;
        else
            a++;
    return a;
}


function dado()
{
    var num;
    num=Math.ceil(Math.random()*6)
    return num;
}
