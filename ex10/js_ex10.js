//Ex10: JavaScript Function
//Ex10.1: A Simple Function
function myHello(){
    document.getElementById("ex10-1").innerHTML = "Hello Javascript";
}

//Ex10.2 Function with an Argument
function myWelcome(name, job){
    document.getElementById("ex10-2").innerHTML = "Welcome" + name + ", the " + job + ".";
}

//Ex10.3 Function with an Argument by Text
function myText(text){
    document.getElementById("ex10-3").innerHTML = text;
}

//Ex10.4: Function that return an Area Value
var area = myArea(6,8);
document.getElementById("ex10-4").innerHTML = area;

function myArea(width, length){
    return width * length;
}

//Ex10.5: Function that return a Temperature Value
document.getElementById("ex10-5").innerHTML = Celsius(189);
function Celsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

//Ex10.6: Input & Output and regArea Function
function regArea(){
    var r_width = document.getElementById('input1').value;
    var r_length = document.getElementById('input2').value;
    var result = r_width * r_length;
    if(!isNaN(result)){
        document.getElementById('result').value = result;
    }
}

//Ex10.7: Input & Output and toCelsius Function
function toCelsius(){
    var fah = document.getElementById('fah_value').value;
    var cel_result = (5/9) * (fah-32);
    if(!isNaN(cel_result)){
        document.getElementById('cel_result').value = cel_result;
    }
}