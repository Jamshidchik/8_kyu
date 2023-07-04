
var a = +prompt( "Son krit:")
while (isNaN(a) && a == 0  ) {
    a = +prompt("Bu son emas Iltimos son kriting:")
}
if (a % 2 == 0 ) {
    alert("Juft son")
} else{  
       
    alert("Toq son")
}
alert("Siz " + a +" sonini kiritdingiz")