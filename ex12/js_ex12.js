//Ex12: JavaScript Maths
//Ex12.1: Math.PI and Math.pow()
var radius = 8;
document.getElementById("ex12-1").innerHTML = "radius = 8 <br> PI = " + Math.PI + "<br> Circle Area = " + Math.pow(radius,2); //PIradius*radius
function circleArea(){
    var radius = document.getElementById('input').value;
    var result = Math.PI * Math.pow(radius,2);
    if(!isNaN(result)){
        document.getElementById('result').value = result;
    }
}

//Ex12.2 Math.sqrt(), Math.round(), Math.ceil(), and Math.floor()
function mathFunction(){
    var number = document.getElementById('number_input').value;
    var sqrt_result = Math.sqrt(number)
    if(!isNaN(sqrt_result)){
        document.getElementById('sqrt_output').value = sqrt_result;
    }
}