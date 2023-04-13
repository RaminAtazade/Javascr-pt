// alert("gun aymadi") isdiyir 


var a = 316 ;
var t = a%10;
console.log (t);
var o = (a%100-t)/10;
//  123 bol 100 = 23 23-3=20 20 bol 10=2
console.log (o);
var y = (a%1000-t-o*10)/100;
console.log(y);
if (t==o && t==y && o==y){
    console.log("Reqemler Eynidi");
}
else if(t==y){
    console.log("Onluq Ferqlidir")
}
else if(t==o){
    console.log("Yuzluk Ferqlidir")
}
else if (o==y){
    console.log("Teklik Ferqlidir")
}
else{
    console.log("Ferqli Reqemler")
};


task2

alert();
var subject=prompt("Simvol yaz");
switch(subject){
    case "a":
        console.log("Aze secildi");
        break;
        case "r":
        console.log("Rus secildi");
        break;
        case "t":
        console.log("TR secildi");
        break;
        default:
            console.log("Dil yoxdur");
            break;
}






